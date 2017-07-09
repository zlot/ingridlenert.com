import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className='header__container'>
            <h1 className='header__title header__title--ingrid'>Ingrid</h1>
            <h1 className='header__title header__title--lenert'>Lenert</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
