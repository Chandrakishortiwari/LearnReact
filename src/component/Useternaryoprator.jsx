import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

function Useternaryoprator() {
    let [status, setstatus] = useState(true);


  return (
    <div>
       <Button variant="warning" onClick={()=>setstatus(!status)} >
        {(status)?'hide':'show'}
        </Button>


      {(status) ? <p>Welcome</p>
      :
      ''}
        

    </div>
  )
}

export default Useternaryoprator