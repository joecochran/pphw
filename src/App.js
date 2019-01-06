import React, { Component } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Sidebar from './components/Sidebar/Sidebar';
import Timeline from './components/Timeline/Timeline';
import LaneTarget from './components/LaneTarget/LaneTarget';
import Lane from './components/Lane/Lane';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLaneDropTarget: false,
      lanes: [],
      step: 0,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({step: 1});
    }, 333);
  }

  handleLaneDrag = (event) => {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData('text/plain', 'lane');
    this.setState({showLaneDropTarget: true});
  }

  handleBarDrag = (event) => {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData('text/plain', 'bar');
  }

  addLane = (event) => {
    event.preventDefault();
    const target = event.dataTransfer.getData("text/plain");
    if (target === "lane") {
      this.setState((currentState) => ({
        lanes: currentState.lanes.concat({id: this.state.lanes.length + 1}),
        showLaneDropTarget: false,
      }));
    }
    if (this.state.step === 2) {
      setTimeout(() => {
        this.setState({step: 3})
      }, 333);
    }
  }

  handleDragEnd = (event) => {
    event.preventDefault();
    this.setState({showLaneDropTarget: false});
  }

  updateStep = () => {
    this.setState((currentState) => ({
      step: currentState.step + 1
    }));
  }

  render() {
    return (
      <div className="layout">
        <div className="row-1">
          <Header /> 
          <Nav />
        </div>
        <div className="row-2">
          <main className="o-main">
            <div className="c-roadmap">
              <Timeline />
              {this.state.lanes.map(lane => (
                <Lane id={lane.id} key={lane.id} handleStepUpdate={this.updateStep} />
              ))}
              {this.state.showLaneDropTarget && (
                <LaneTarget handleLaneDrop={this.addLane} />
              )}
            </div>
            <Sidebar handleLaneDrag={this.handleLaneDrag} handleDragEnd={this.handleDragEnd} handleBarDrag={this.handleBarDrag} step={this.state.step} handleStepUpdate={this.updateStep} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
