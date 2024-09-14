import React, { useEffect, useState } from 'react'

function Workonuseeffect() {
   
    let [value ,setvalue] = useState(0)
    useEffect(()=>{
      alert("hello")
    },[value ]);

  return (
    <div>
    <button onClick={()=> setvalue(value + 1)}>add</button>
    <h1> value:{value}</h1>
  </div>
  )
}

export default Workonuseeffect