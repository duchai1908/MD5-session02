import React from 'react'

export default function Button({children}) {
  console.log(children);
  
  return (
    <div>
      <button>{children}</button>
    </div>
  )
}
