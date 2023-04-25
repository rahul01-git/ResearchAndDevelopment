import React from 'react'
import '../assets/screen.css'
export default function Screen({screen}) {
  return (
    <div className="screen">
        <input type="text" readOnly value={screen}/>
    </div>
  )
}
