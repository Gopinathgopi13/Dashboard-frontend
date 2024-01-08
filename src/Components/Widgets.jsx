import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Widgets.css'
function Widgets() {
  return (
    <>
        <div className='mainDiv'>
            <div className='cards'>
                <Link className='linkTag' to='/teachers'>
                <div className='cardIcon'>
                    <div>
                    <img src="staff.png" alt="" style={{height:"100px",width:"100px", objectFit: "cover"}}/>
                    </div>
                </div>
                <div className='cardHeading'>
                    <h3>Staff</h3>
                </div>
                </Link>
            </div>
            <div className='cards'>
            <Link className='linkTag' to='/student'>
                <div className='cardIcon'>
                    <div>
                    <img src="Student-Icon.png" alt="" style={{height:"100px",width:"100px", objectFit: "cover"}}/>
                    </div>
                </div>
                <div className='cardHeading'>
                    <h3>Student</h3>
                </div>
                </Link>
            </div>
            <div className='cards'>
            <Link className='linkTag' to='/milestone'>
                <div className='cardIcon'>
                    <div>
                    <img src="staff.png" alt="" style={{height:"100px",width:"100px", objectFit: "cover"}}/>
                    </div>
                </div>
                <div className='cardHeading'>
                    <h3>Milestones</h3>
                </div>
                </Link>
            </div>
            <div className='cards'>
            <Link className='linkTag' to='/events'>
                <div className='cardIcon'>
                    <div>
                    <img src="staff.png" alt="" style={{height:"100px",width:"100px", objectFit: "cover"}}/>
                    </div>
                </div>
                <div className='cardHeading'>
                    <h3>Events</h3>
                </div>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Widgets