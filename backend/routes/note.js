  const express = require ("express");
  const router = express.Router();
  const Note = require("../model/note")
   
  router.get("/", async (req, res) => {
const note = await Note.find();
return res.json(note);

  });

  router.post ("/", async (req, res) => {
   const title = req.body.title;
  const content = req.body.content;
    if(!title || !content)
    {
        return res.status(400).json({message:"Title and Content required"});
    }
    const noteData = { title, content };
    const note = new Note(noteData);

    try {
    const saved = await note.save();
    res.status(201).json(saved); 
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }

  });

  router.delete('/:id', async (req, res) => {
    const noteId = req.params.id;
     if (!noteId) {
    return res.status(400).json({ message: "Note Id required" });
  }
  try {
    const deletedNote = await Note.findByIdAndDelete(noteId);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted", note: deletedNote });

  } catch (error) {
    
    res.status(500).json({ message: "Server error", error: error.message });
  }
 
});

module.exports = router;