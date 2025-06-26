
import DeleteIcon from "@mui/icons-material/Delete"
function Note(props) {
   
   function handleClick() {
    console.log("Note ID clicked:", props.id);  // ✅ debug log
    props.onDelete(props.id); 
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><DeleteIcon /></button>
    </div>
  );
} 

export default Note;