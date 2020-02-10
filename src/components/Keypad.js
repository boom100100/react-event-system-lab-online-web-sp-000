import React, { Component } from 'react';

export default class Keypad extends Component {
  
  constructor(props) {
    super();
    this.state = {
      //color: props.value
    }
  }
  
  keyUpHandler = () => {
    console.log('Entering password...');
    this.setState({
      //color: '#333'
    });
  }
  
  render() {
    return (
      <div><input onKeyUp={this.keyUpHandler} type="password" /></div>
    )
  }
  
}