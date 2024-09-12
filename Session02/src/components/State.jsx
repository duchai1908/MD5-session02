import React, { useState } from 'react'

export default function State() {
    const [state,setState] = useState(0);

    const increaseNumber = () =>{
        setState(state + 2);
    }

    const [numbers, setNumbers] = useState([]);

    const addRamdomnumber = () =>{
        setNumbers([...numbers, Math.ceil(Math.random() * 10)]);
    }
    
  return (
    <div>
        <h3>State: {state}</h3>
        <h3>Random number: {JSON.stringify(numbers)}</h3>
        <button onClick={increaseNumber}>increase</button>
        <button onClick={addRamdomnumber}>add ramdom</button>
    </div>
  )
}
