import React from 'react'
import '../assets/css/navbar.css'
import profile_pic from '../assets/images/image-1.jpg';

function navbar() {
  return (
    <div className='navbar'>
        <div className='branding'>
            <h3>Hours</h3>
        </div>
        <div className='navbar-listing'>
            <ul>
                <li className='active'>
                    Dashboard
                </li>
                <li>
                    Projects
                </li>
                <li>
                    Team
                </li>
                <li>
                    Client
                </li>
                <li>
                    Time
                </li>
                <li>
                    Reports  
                </li>
            </ul>
        </div>
        <div className='profile-section'>
            <div className='notification'>
            
            </div>
            <div className='profile-info'>
                <div className='profile-img avatar'>
                <img src={profile_pic} className="avatar-img"/>
                </div>
                <div className='profile-name'>
                <span>Maria</span>
                </div>
                <div className='profile-options'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default navbar