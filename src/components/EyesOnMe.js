import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  
  constructor(props) {
    super();
    this.state = {
      color: props.value
    }
  }
  
  focusHandler = () => {
    console.log('Good!');
    this.setState({
      color: '#333'
    });
  }
  
  render() {
    return (
      <div><button onFocus={this.focusHandler} /></div>
    )
  }
  
}