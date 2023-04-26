import React from 'react'
import '../assets/screen.css'
export default function Screen({value}) {
  return (
    <div className="screen">
        <input type="text" readOnly value={value}/>
    </div>
  )
}
