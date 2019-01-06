import React, { Component } from 'react';
import Bar from '../Bar/Bar';
import arrow from './arrow.svg';
import './Lane.scss';

class Lane extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showFirstBar: false,
      showSecondBar: false,
      showThirdBar: false,
      bars: 0,
      rows: 0,
      collapsed: false,
    }
  }

  handleDragOver = () => {
    if (this.state.bars === 0) {
      this.setState({showFirstBar: true});
    }
    if (this.state.bars === 1) {
      this.setState({showSecondBar: true});
    }
    if (this.state.bars === 2) {
      this.setState({showThirdBar: true});
    }
  };

  toggleCollapsed = () => {
    this.setState((currentState) => ({
      collapsed: !currentState.collapsed
    }))
  }

  handleDrop = (event) => {
    event.preventDefault();
    this.setState((currentState) => ({bars: currentState.bars + 1}), () => {
      if (this.state.bars === 1) {
        this.props.handleStepUpdate();
      }
    });

  }

  render() {
    return (
      <div className={"c-lane" + (this.state.collapsed ? ' is-collapsed' : '')} onDragOver={this.handleDragOver} >
        <div className="c-lane__header" onClick={this.toggleCollapsed}><img className="i-arrow" src={arrow} alt="" /> <span>Lane {this.props.id}</span></div>
        <div className={"c-lane__body" + (this.state.showSecondBar ? ' c-lane__body--row2' : '')}>
          {this.state.showFirstBar && (
            <Bar handleDrop={this.handleDrop} label="Roadmap Item 1" />
          )}
          {this.state.showSecondBar && (
            <Bar handleDrop={this.handleDrop} label="Roadmap Item 2" />
          )}
          {this.state.showThirdBar && (
            <Bar handleDrop={this.handleDrop} label="Roadmap Item 3" />
          )}
        </div>
      </div>
    )
  }
}

export default Lane;
