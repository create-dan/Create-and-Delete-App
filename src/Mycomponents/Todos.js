import React from 'react'
import{ TodoItem} from "../Mycomponents/TodoItem";

export const Todos = (props) => {
    let myStyle={
minHeight:"70vh"
    }
    return (
        <div className="container my-3 " style={myStyle}>
           <h2 className=" my-3">All Posts</h2>

           {props.todos.length===0 ? "No posts to display" :

           props.todos.map((todo)=>{
              
            return(
               
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
             
            )

           })
        }
            
        </div>
    )
}
