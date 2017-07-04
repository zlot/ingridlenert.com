import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className='title title--ingrid'>Ingrid</h1>
          <h1 className='title title--lenert'>Lenert</h1>
        </div>
      </div>
    );
  }
}

export default App;
