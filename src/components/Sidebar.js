import React from 'react';
import Draggable from './Draggable';

function Sidebar(props) {
  return (
    <div className="c-sidebar">
      <Draggable name="Add lane" handleDrag={props.handleLaneDrag} handleDragEnd={props.handleDragEnd} />
      <Draggable name="Add bar" handleDrag={props.handleBarDrag} handleDragEnd={props.handleDragEnd} />
    </div>
  )
}

export default Sidebar;
