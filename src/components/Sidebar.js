import React from 'react';
import Draggable from './Draggable';

function Sidebar(props) {
  return (
    <div className="c-sidebar">
      <Draggable name="Add lane" handleDrag={props.handleLaneDrag} />
      <Draggable name="Add bar" handleDrag={() => {return false}} />
    </div>
  )
}

export default Sidebar;
