import React, { Component } from 'react';
import Logo from '../Logo';
import Nav from '../Nav';
import './styles.css';



export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Logo />
        <Nav />
      </div>
    );
  }
}


