import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes";

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      working: false
    }
}

  handleClick = () => {
    this.setState({
      working: !this.state.working
    });
  };


  render() {
    const turn = this.state.working?'stop':'work';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className= {turn} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button 
          onClick = {this.handleClick}
        >{turn.toUpperCase()}
        </button>
        <Quotes/>
      </div>
    );
  }
}

export default App;
