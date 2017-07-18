import React, { Component } from 'react'
import Header from './Header'
import 'foundation-sites'
import $ from 'jquery'
import {addAnimation, startAnimations, stopAnimations} from './spriteAnimator'

const ANIMATION_INTERVAL = 125

export default class App extends Component {

  componentDidMount = () => {
    $(document).foundation()

    addAnimation('Lucy_Mitsy', 28)
    addAnimation('Jessica', 18)
    addAnimation('Amani', 12)
    addAnimation('Alfie', 17)
    startAnimations({
      interval: ANIMATION_INTERVAL
    })
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
