import React, { Component } from 'react';
import Bar from './Bar';

class Lane extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showBarTarget: false,
      bars: 0
    }
  }

  handleDragEnter() {

  }

  handleDragLeave() {
    
  }

  handleDrop(event) {
    event.preventDefault();
    console.log('foo');
  }

  render() {
    return (
      <div className="c-lane" onDragOver={() => this.setState({showBarTarget: true})} >
        <div className="c-lane__header">Lane {this.props.id}</div>
        <div className="c-lane__body ">
          {this.state.showBarTarget && (
            <Bar handleDrop={this.handleDrop} />
          )}
        </div>
      </div>
    )
  }
}

export default Lane;
