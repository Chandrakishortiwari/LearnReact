import React, { useState } from 'react'
import "../Todo/todo.css"

function Createatodolist() {
    let [todoli, settodoli] = useState([]);

    let saveTodolist = (event) =>{
     
     

        let todoName =event.target.todoname.value;
        if (!todoli.includes(todoName)){
         let finalTodolist = [...todoli, todoName ]
          settodoli(finalTodolist)
        }
        else{
            alert("already exist")
        }
        
        event.preventDefault();
        event.target.reset();
    }
    let list = todoli.map((value,index) =>{
      return(
        <TodoListeItem  value={value}  key={index}  indexNumber={index} todoli ={todoli} settodoli ={settodoli}/>
      )
    })


  return (
    <div> 
        <h1>TODO LISTE </h1>
        <form onSubmit={saveTodolist}>
            <input type='text' name='todoname' /> <button>Save</button>
        </form>
   
   <div className='outerdiv'>       
      <ul>
          {list}
      </ul >
      
      </div>
   
     
    </div>
  )
}

export default Createatodolist

function TodoListeItem({value, indexNumber, todoli, settodoli}) {
  let deletTodoList = ()=>{
    let finalData = todoli.filter((v, i)=>i!==indexNumber)
    settodoli(finalData);
    
  }

  return(
    <li> {value} <span onClick={deletTodoList}>&times;</span></li>
  )
}