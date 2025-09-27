import React, { use, useEffect } from 'react'

import { useState } from 'react';


function Hcomponent() {
    const [counter,setcounter]=useState(11);
    const increasecounter=()=>{
        setcounter(counter+1);
    }
    
    const decreasecounter=()=>{
        setcounter(counter-1);
    }
    useEffect(()=>{
        console.log("component updated");
    },[]);
  return (
    <div>
        <button onClick={increasecounter}>+</button>
        <span>{counter}</span>
        <button onClick={decreasecounter}>-</button>
      
    </div>
  )
}

export default Hcomponent
