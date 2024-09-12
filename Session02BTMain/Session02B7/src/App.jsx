import React from 'react'
import LeftCart from './components/leftCart'
import RightCart from './components/RightCart'

export default function App() {
  return (
    <div className='main-bar'>
      <div className='left-bar'>
        <LeftCart/>
      </div>
      <div className='right-bar'>
        <RightCart/>
      </div>
    </div>
  )
}
