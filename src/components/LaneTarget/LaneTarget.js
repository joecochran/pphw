import React from 'react';
import './LaneTarget.scss';

function LaneTarget(props) {
  return (
    <div 
      className="c-lane-target"
      onDragEnter={(event) => {event.preventDefault()}}
      onDragOver={(event) => {event.preventDefault()}}
      onDrop={props.handleLaneDrop}>
        <div>Drop here</div>
    </div>
  )
}

export default LaneTarget;
