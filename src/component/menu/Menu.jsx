import React, { useState } from 'react'
import  '../menu/Menu.css'
function Menu() {
   
  let [mstatus, setmstatus] = useState(false)

  return (
    <div  >
         <button className='micon' onClick={()=>setmstatus(!mstatus)}>
        {mstatus ? <span>&#9956;</span> : <span> &#9997;
          </span>} 
          </button>
      <div className={ `menu ${mstatus ? 'activeMenu':''}`}>
   
        <ul >
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Gallery</li>
            
        </ul>
      </div>
    
    </div>
  )
}

export default Menu
