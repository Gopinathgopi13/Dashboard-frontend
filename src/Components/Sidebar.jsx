import React from 'react'
import '../Style/Sidebar.css'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-menu-div'>
            <div>
                <Link className='linkTag' to="/">Home</Link>
            </div>
            <div>
                <Link className='linkTag' to="/teachers">Teacher</Link>
            </div>
            <div>
            <Link className='linkTag' to="/student">Student</Link>
            </div>
            <div>
            <Link className='linkTag' to="/milestone">Milestones</Link>
            </div>
            <div>
            <Link className='linkTag' to="/events">Event</Link>
            </div>
            <div>
              <Link className='linkTag' to="/addDetails">Add Details</Link>
            </div>
            {/* <Link to=""></Link> */}
            {/* <Link to=""></Link> */}
        </div>
    </div>
  )
}

export default Sidebar