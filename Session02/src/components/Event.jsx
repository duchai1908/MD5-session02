import React, { useState } from 'react'

export default function Event() {
    const [count, setCount] = useState(0);

    const handleCount = () =>{
        setCount((prev)=>prev+1);
    }
  return (
    <div>
        <h3>Count: {count}</h3>
        <button onClick={handleCount}>Click increase</button>
        <input type="text" />
    </div>
  )
}
