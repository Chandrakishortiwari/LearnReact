
import React, { useReducer } from 'react'

function WorkonuseReducer() {

    let reducer = (state, action)=>{

            switch(action.type){
               case "inccrement" : {
                return{state, val: state.val + 1}
               }
               case "Decrrement" : {
                return{state, val: state.val - 1}
               }
               case "hidedata" : {
                return{state, val2: !state.val2}
               }
            }
        

    }

   
    let [setvalu, dispatch] = useReducer(reducer, {val: 0 , val2: false})

  return (
    <div>
     
     <button onClick= {()=>{dispatch({type :"inccrement"})}}>+</button>
     <h1>Valu:{setvalu.val}</h1>
     <button onClick= {()=>{dispatch({type :"Decrrement"})}}>-</button>
      {setvalu.val2 ? <h1>data ablible</h1>: <h1>data !ablible</h1>}
      <button onClick= {()=>{dispatch({type :"hidedata"})}}> {setvalu.val2 ? "hide" :" show"}</button>

    </div>
  )
}

export default WorkonuseReducer