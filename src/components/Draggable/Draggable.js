import React from 'react';
import './Draggable.scss';

function Draggable(props) {
  return (
    <div className="c-draggable" draggable="true" onDragStart={props.handleDrag} onDragEnd={props.handleDragEnd}>
      {props.name}
    </div>
  )
}

export default Draggable;
