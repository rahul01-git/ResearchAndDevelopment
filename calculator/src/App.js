import React, { useState } from 'react'
import Button from './components/Button'
import Screen from './components/Screen'
import './assets/App.css'

export default function App() {
    const [screen , setScreen] = useState();
  return (
    <div className="App">
        <Screen screen={screen}/>
        <Button screen={screen} setScreen={setScreen}/>
    </div>
  )
}
