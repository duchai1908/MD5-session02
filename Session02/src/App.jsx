import React from 'react'
import ParentComponent from './components/ParentComponent'
import "./App.css"
import Button from './components/Button'
import State from './components/State'
import Event from './components/Event'

export default function App() {
  return (
    <div>
      {/* <ParentComponent/> */}
      {/* <Button>
        <span>check</span>
      </Button>
      <Button>
        <span>check 2</span>
      </Button> */}
      {/* <State></State> */}
      <Event/>
    </div>
  )
}
