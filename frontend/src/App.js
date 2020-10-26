import './App.css';
import React, { Component } from "react";
import { connect, sendMsg } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    connect();
  }

  send() {
    console.log("Message sent");
    sendMsg("Message sent");
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.send}>Send message</button>
      </div>
    );
  }
}

export default App;
