import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
import LaneArea from './components/LaneArea';

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
    event.dataTransfer.setData('text/html', 'lane')
    this.setState({showLaneDropTarget: true});
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
              {this.state.showLaneDropTarget && (
                <LaneArea />
              )}
            </div>
            <Sidebar handleLaneDrag={this.handleLaneDrag} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
