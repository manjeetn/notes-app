const express = require ("express");
const mongoose = require('mongoose');
const cors = require('cors');
const noteRoutes = require('./routes/note');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/notes')
.then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/notes", noteRoutes);




app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));