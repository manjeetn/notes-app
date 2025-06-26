
import axios from "axios";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add"
import { Fab } from "@mui/material"
function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function updateNote(event) {
const name = event.target.name;
const value = event .target.value;

setNote(prevValue =>{
return {
    ...prevValue,
    [name]: value
};
});
  }

 async function submitNote(event) {
    event.preventDefault();
    try {
    const res = await axios.post("http://localhost:3001/api/notes", note);
    props.onAdd(res.data);
    setNote({
        title: "",
        content: ""
    });
  }
  catch (err){
    console.error("Error saving note", err);
  }
    
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
        <form className="create-note">
          {isExpanded ? 
            <input 
            name="title"
            onChange={updateNote}
            value={note.title}
            placeholder="Title"
            /> : null
            }

            <textarea 
            name="content"
            onClick={expand}
            onChange={updateNote}
            value={note.content}
            placeholder="Take a note.."
            rows={isExpanded ? 3 : 1}
            />
 
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
        </form>
    </div>
  )
}
  export default CreateArea;