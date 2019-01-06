import React from 'react';
import DragIcon from '../drag-icon.svg';

function Draggable(props) {
  return (
    <div className="c-draggable" draggable="true" onDragStart={props.handleDrag}>
      <img className="c-draggable__icon" src={DragIcon} alt="" draggable="false"/>
      <span>{props.name}</span>
    </div>
  )
}

export default Draggable;
