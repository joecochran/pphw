import React, { Component } from 'react';

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
    }
  }

  handleDrop = (event) => {
    this.setState({ filled: true })
    this.props.handleDrop(event);
  }

  render() {
    return (
      <div className={"c-lane__bar" + (this.state.filled ? ' c-lane__bar--filled' : '')} onDrop={this.handleDrop} onDragEnter={(event) => {event.preventDefault()}} onDragOver={(event) => {event.preventDefault()}}>{this.state.filled && (this.props.label)}</div>
    )
  }
  
}

export default Bar;
