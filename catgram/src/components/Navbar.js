import React from 'react'
import '../assets/navbar.css'
export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <ul>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/post">Post</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/post/login">Post Login</a></li>
            </ul>
        </nav>
    </div>
  )
}
