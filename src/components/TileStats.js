import React from 'react';
import '../assets/css/tilestats.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function TileStats(props) {
console.log(props,'tile')
 let icon = props.icon;
 let stats = props.stats;
 let statsTitle = props.statsTitle;
 let dangerStatus = props.dangerStatus;

 let iconColor = dangerStatus ? {color:'#d6103a'}:{color:'#3fcdc6'}
 const element = <FontAwesomeIcon icon={icon} style={iconColor}/>

  return (
    <div id={dangerStatus ? 'danger':''} className='tileStats'>
        <div className='icon'>
        {element}
        </div>
        <div className='statsContainer'>
          <div className='stats'>
            <h1>{stats}</h1>
          </div>
          <div className='statsTitle'>
            <p>{statsTitle}</p>
          </div>
        </div>
        <div className='lastDiv'>

        </div>
    </div>
  )
}

export default TileStats