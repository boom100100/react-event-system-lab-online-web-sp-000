import React, { Component } from 'react';

export default class Keypad extends Component {
  
  constructor(props) {
    super();
    this.state = {
      color: props.value
    }
  }
  
  clickHandler = () => {
    this.setState({
      color: '#333'
    });
  }
  
  render() {
    return (
      <div><input type="password" /></div>
    )
  }
  
}