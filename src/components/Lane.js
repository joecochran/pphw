import React, { Component } from 'react';

class Lane extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      bars: []
    }
  }

  // addBar
  render() {
    return (
      <div className="c-lane">
        <div className="c-lane__header">Lane</div>
        <div className="c-lane__body ">
          
        </div>
      </div>
    )
  }
}

export default Lane;
