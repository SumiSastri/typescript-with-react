import React, { Component } from 'react'
import './App.css';

class App extends Component {
  multiply(a:number, b:number) :number  {
    return a * b
  }
  render() {
    return (
      <div>
        <h1>React with Typescript Test</h1>
        <h2>{this.multiply (5,5)}</h2>
      </div>
    )
  }
}

export default App;
