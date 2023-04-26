import React, { useState } from 'react'
import Screen from './components/Screen'
import Button from './components/Button'
import './assets/App.css'

export default function App() {

  const [screen , setScreen] = useState('')

  return (
    <div className="App">
      <Screen value={screen}/>
      <Button setScreen={setScreen} screen={screen} />
    </div>
  )
}
