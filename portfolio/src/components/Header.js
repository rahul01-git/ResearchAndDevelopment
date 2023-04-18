import React, { Component } from 'react'
import '../assets/header.css'
import NavWrapper from './NavWrapper'

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo">RESUMA</div>
        <NavWrapper/>
      </header>
    )
  }
}
