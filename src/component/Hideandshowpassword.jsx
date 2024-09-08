
import React, { useState } from 'react'

function Hideandshowpassword() {

    let [show,setshow] = useState(false)

  return (
    <div>
        <input type={show ?'text':'password'}>
        </input>
        <button onClick={()=>setshow(!show)}>{show ? 'hidepassword':'showPassword'}</button>
    </div>
  )
}

export default Hideandshowpassword