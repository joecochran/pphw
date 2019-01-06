import React, { Component } from 'react';
import LaneTarget from './LaneTarget';
import Lane from './Lane';

class LaneArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLane: false
    }
  }
  
  handleDrop = (event) => {
    this.setState({hasLane: true});
  }

  render() {
    return (
      <div onDragEnter={(event) => {event.preventDefault()}} onDragOver={(event) => {event.preventDefault()}} onDrop={this.handleDrop}>
        {this.state.hasLane ? <Lane /> : (<LaneTarget />)}
      </div>
    )
  }
}

export default LaneArea;
