import React, { Component } from 'react'
import './App.scss'
import Header from './Header'
import 'foundation-sites'
import $ from 'jquery'

export default class App extends Component {

  componentDidMount = () => {
    $(document).foundation()
    let name = `Lucy_Mitsy-`
    let num = '1'
    setInterval(() => {
      if(num > 28) {
        num = 1
      }
      $('#test').removeClass(`Lucy_Mitsy-${num}`)
      num = pad(Number(num)+1, 2)
      $('#test').addClass(`Lucy_Mitsy-${num}`)
    }, 150)

    function pad(num, size) {
      var s = num+"";
      while (s.length < size) s = "0" + s;
      return s;
    }
  }

  render = () => {
    return (
      <div className='App'>
        <div id='test' className='sprite Lucy_Mitsy-01'></div>
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
