import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import {tabs} from '../Data/Tabs'

function Tabingsystem() {
    let [activeTab,setactiveTab] = useState(0);
    let [activeContent,setactiveContent] = useState(tabs[0])
    console.log(tabs);
    let chengeData = (index)=>{
     setactiveTab(index)
     setactiveContent(tabs[index])
    }
  return (
   
    <div>
        <h1>vision</h1>
       
        
        {tabs.map((tabsItem,index) =>{
            return(

            <Button variant="secondary" onClick={()=>chengeData(index) }>{tabsItem.title}</Button>
        )
          })}

          {activeContent!==undefined ?<p>
            {activeContent.description}
        </p>:""}
       
      
    </div>
  )
}

export default Tabingsystem