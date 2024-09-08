import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

function Usestatehookusing() {

   let [value, setvalue] = useState(0)
   
    let addValue = ()=>{
      if (value < 20) {
        setvalue(value + 1)
        
      }
    }

    let dleValue = ()=>{
        if (value > 0) {
            setvalue(value -1)
            
        }
    }
       
            
        
    

  return (


    <div>
        <h1>Usestatehookusing</h1>

        <h3>Product {value}</h3> <br></br><br></br><br></br>
        <Button variant="success" onClick={addValue}>Add Product</Button>{' '}  <br></br><br></br>
        <Button variant="warning" onClick={dleValue}>Dle Product</Button>{' '}
        
        </div>
  )
}

export default Usestatehookusing