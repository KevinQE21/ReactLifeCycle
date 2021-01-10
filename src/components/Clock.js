
import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      date: new Date(),
    };//Si se pone fuera del constructor no se usa el this. ademas si es mas de una cosa se dentro

  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>It's {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

  componentDidMount(){
    this.timerID = setInterval(() => this.tick() ,1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  componentDidUpdate(){
    console.log('Updated ❤');
  }

  tick() {
    this.setState({//Se utiliza para modificar el state
      date: new Date(),
    });
  }
}

export default Clock;
