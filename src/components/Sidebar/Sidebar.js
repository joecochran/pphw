import React, { Component } from 'react';
import Draggable from '../Draggable/Draggable';
import './Sidebar.scss';
import Popup from '../Popup/Popup';

class Sidebar extends Component {
  render() {
    return (
      <div className="c-sidebar">
        <div className="c-sidebar__onboarding">
          <Popup title="foo" content="bar" action="baz" step={this.props.step} handleStepUpdate={this.props.handleStepUpdate} />
        </div>
        <Draggable name="Add lane" handleDrag={this.props.handleLaneDrag} handleDragEnd={this.props.handleDragEnd} />
        <Draggable name="Add bar" handleDrag={this.props.handleBarDrag} handleDragEnd={this.props.handleDragEnd} />
      </div>
    )
  }
  
}

export default Sidebar;
