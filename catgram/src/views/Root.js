import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <div>
            <Navbar />
            <div className="content-wrapper">
                <div className="sidebar">sidebar</div>
                <div><Outlet /></div>
                <div className='footer'>footer</div>
            </div>
        </div>
    )
}
