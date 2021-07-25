import React, {useState} from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        else{

            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }

        
    }
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "7px",
        fontFamily: "Arial",
       
      };

      const border={
          border: "2px solid #f59542",
      };
    return (
       
       
        <div className="container my-3">
            <h3>Crate a New Post</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label " style={mystyle}>Post's  Title</label>
                    <input type="text"  value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control my-3" style={border} id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label" style={mystyle}>Post's  description</label>
                    <input type="text" onChange={(e)=>{setDesc(e.target.value)}} className="form-control my-3" style={border} id="desc" />
                </div>
               
                <button type="submit" className="btn btn-success">Create Post</button>
            </form>
        </div>
      
    )
   
}
