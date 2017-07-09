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
      <div className="App">
        <Header />
      </div>
    );
  }
}
