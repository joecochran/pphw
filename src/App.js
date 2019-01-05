import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="layout">
        <div className="row-1">
          <Header />
          <Nav />
        </div>
        <div className="row-2">
          <main className="o-main">
            <div className="c-roadmap"></div>
            <Sidebar />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
