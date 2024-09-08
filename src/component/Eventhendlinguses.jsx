import React from 'react'
import Button from 'react-bootstrap/Button';


function Eventhendlinguses() {
    let alertmessage = ()=>{
        alert("Show the alert message")
    }

    // para mitrise function
    let addvalue = (a,b)=>{
       console.log(a+b);
       
    }
    let hhh =()=>{
        window.location.href = 'https://www.youtube.com/watch?v=ZaC6oCIpjR0&t=5730s'
    }

  return (
    <div>
         <Button variant="light" onClick={alertmessage}>Primary</Button>{' '} <br></br>
         <Button variant="warning" onClick={()=>addvalue(20,24)}>Primary</Button>{' '} <br></br>
         <Button variant="primary" onClick={hhh}>Primary</Button>{' '}
    </div>
  )
}

export default Eventhendlinguses