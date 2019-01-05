import React from 'react';
import DragIcon from '../drag-icon.svg';

function Draggable(props) {
  return (
    <div className="c-draggable">
      <img className="c-draggable__icon" src={DragIcon} alt=""/>
      <span>{props.name}</span>
    </div>
  )
}

export default Draggable;
