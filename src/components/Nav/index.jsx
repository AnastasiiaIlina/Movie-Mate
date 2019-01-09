import React, { Component } from 'react';
import './styles.css';

export default class Nav extends Component {
  render() {
    return (
       <nav className="Nav">
            <ul>
                <li className="Nav__item"><a href="#">ABOUT</a></li>
                <li className="Nav__item"><a href="#">LOGIN</a></li>
                <li className="Nav__item"><a href="#">BROWSE</a></li>
            </ul>
       </nav>
    );
  }
}