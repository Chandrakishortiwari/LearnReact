import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
function Ifelseusing() {
     let temp ='' ;
   let [pshow, setpshow] = useState(true);


   if (pshow) {
    temp =<>
    
            <Button variant="warning" onClick={()=>setpshow(!pshow)} >hide</Button>

    <p>Welcome</p>
    
    </> 
   }
   else{
       temp =   <Button variant="warning"  onClick={()=>setpshow(!pshow)}>show</Button>;
   };

  return (
    <div>
    {temp}
   
    </div>
  )
}

export default Ifelseusing

