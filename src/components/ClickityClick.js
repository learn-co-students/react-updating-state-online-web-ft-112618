// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component{
  constructor() {
    super()

    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    this.setState({
      hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked))//to test and reinforce that state changes are asynchronous!!! had to be a callback function
  }

  // a callback function is a way to make sure certain code doesn't execute until another piece of code has already finished execution
  // callbacks are functions that are implemented to execute after a another specific function.
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}

export default ClickityClick;


// this.setState({
//   addressInfo: {
//     ...this.state.addressInfo, updates the prop??!!!
//     city: 'New York City'
//   }
// })
