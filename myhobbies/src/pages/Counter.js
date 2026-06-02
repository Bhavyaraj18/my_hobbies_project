import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    // initializing state
    this.state = {
      count: 0,
      multiply:0
    };
  }

  // method to update state
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  multiply = ()=>{
    this.setState({multiply: this.state.count * 2});
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count} {this.state.multiply}</h2>

        <button onClick={this.increment}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>
        <button onClick={this.multiply}>Multiply</button>
      </div>
    );
  }
}

export default Counter;