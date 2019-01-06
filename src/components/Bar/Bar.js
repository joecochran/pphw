import React, { Component } from 'react';
import './Bar.scss';

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
    }
  }

  handleDrop = (event) => {
    event.preventDefault();
    this.setState({ filled: true })
    this.props.handleDrop(event);
  }

  render() {
    return (
      <div
        className={"c-bar" + (this.state.filled ? ' c-bar--filled' : '')} 
        onDrop={this.handleDrop} 
        onDragEnter={(event) => {event.preventDefault()}} 
        onDragOver={(event) => {event.preventDefault()}}>
          {this.state.filled && (this.props.label)}
        </div>
    )
  }
  
}

export default Bar;
