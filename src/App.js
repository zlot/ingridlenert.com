import React, { Component } from 'react'
import Header from './Header'
import 'foundation-sites'
import $ from 'jquery'
import './App.scss'
import './assets/lucy_mitsy.scss'
import './assets/jessica.scss'
import './assets/amani.scss'
import {addAnimation, startAnimations} from './spriteAnimator'

export default class App extends Component {

  componentDidMount = () => {
    $(document).foundation()

    addAnimation('Lucy_Mitsy', 28)
    addAnimation('Jessica', 18)
    addAnimation('Amani', 12)
    const interval = startAnimations({
      interval: 125
    })
  }

  render = () => {
    return (
      <div className='App'>
        <div id='Jessica'></div>
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
