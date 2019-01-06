import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
import LaneTarget from './components/LaneTarget';
import Lane from './components/Lane';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLaneDropTarget: false,
      lanes: []
    }
  }

  handleLaneDrag = (event) => {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData('text/plain', 'lane');
    this.setState({showLaneDropTarget: true});
  }

  handleBarDrag = (event) => {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData('text/plain', 'lane');
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
  }

  handleDragEnd = (event) => {
    event.preventDefault();
    this.setState({showLaneDropTarget: false});
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
                <Lane id={lane.id} key={lane.id} />
              ))}
              {this.state.showLaneDropTarget && (
                <LaneTarget handleLaneDrop={this.addLane} />
              )}
            </div>
            <Sidebar handleLaneDrag={this.handleLaneDrag} handleDragEnd={this.handleDragEnd} handleBarDrag={this.handleBarDrag}/>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
