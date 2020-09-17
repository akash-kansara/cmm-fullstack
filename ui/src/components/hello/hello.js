import React, { Component } from 'react';
import './hello.scss';

class Hello extends Component {
  render() {
    return (
      <>
        <p className="hello">{process.env['GREET_TEXT']}</p>
        <p className="hello">Hello</p>
      </>
    );
  }
}

export default Hello;