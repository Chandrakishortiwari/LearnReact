import React, { useState } from 'react'

function Createatodolist() {
    let [todoli, settodoli] = useState([]);

    let saveTodolist = (event) =>{
     
     

        let todoName =event.target.todoname.value;
        if (todoli.includes(todoName)){


        }
        else{
            alert("already exist")
        }
        
        event.preventDefault();
    }

  return (
    <div> 
        <h1>TODO LISTE </h1>
        <form onSubmit={saveTodolist}>
            <input type='text' name='todoname' /> <button>Save</button>
        </form>

    </div>
  )
}

export default Createatodolist