import React from 'react'
import '../assets/css/team_mood.css';

function TeamMood(props) {

    let name = props.name;
    let designation = props.designation;
    let profile_pic = props.profile_pic;
    let happy = props.happy;

  return (
    <div>
        <div className='team-profile'>
            <div className='person-detail-container'>
            <div className='team-image avatar'>
            <img src={profile_pic} className="avatar-img"/>
            </div>
            <div className='profile-description'>
                <p>
                    {name}
                </p>
                <p>
                    {designation}
                </p>
            </div>
            </div>
            <div className='mood-slider'>
            <div className="slidecontainer">
            <input type="range" min="1" max="10" value={happy} className="slider thump-custom" id="myRange"
                            list="tickmarks"
            />
            </div>
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default TeamMood