import React from 'react';
import Draggable from './Draggable';
function Sidebar(props) {
  return (
    <div className="c-sidebar">
      <Draggable name="Add lane" />
      <Draggable name="Add bar" />
    </div>
  )
}

export default Sidebar;
