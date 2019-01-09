import React, { Component } from 'react';
import './styles.css';

export default class Button extends Component {
  render() {
    const { btnText, onClick } = this.props;

    return (
        <div className = "Button" onClick = { onClick }>{ btnText }</div>
    );
  }
}