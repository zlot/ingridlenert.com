import React, { Component } from 'react'
import './App.scss'
import Header from './Header'
import 'foundation-sites'
import $ from 'jquery'

export default class App extends Component {

  componentDidMount = () => {
    $(document).foundation()
  }

  render = () => {
    return (
      <div className='App'>
        <Header />
        <div className='grid-container grid-container-padded portfolio'>
          <div className='grid-x grid-padding-x'>
            <div className='cell small-12 portfolio-item'>Coming soon … 🏝</div>
          </div>
          <div className='grid-x grid-padding-x'>
            <div className='cell small-12'></div>
          </div>
        </div>
      </div>
    );
  }
}
