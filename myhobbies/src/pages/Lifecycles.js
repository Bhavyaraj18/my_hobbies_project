import React, { Component } from 'react';

class Lifecycles extends Component {
  state = { time: new Date() };

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
    console.log("didmount")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Clock updated');
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return <h2>Time: {this.state.time.toLocaleTimeString()}</h2>;
  }
}

export default Lifecycles;