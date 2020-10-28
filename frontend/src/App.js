import './App.css';
import React, { Component } from "react";
import { connect, sendMsg } from "./api";
import Header from './components/Header/Header';
import History from './components/History/History';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount() {
    connect((msg)=>{
      console.log("New message");
      this.setState(prevState=>({chatHistory:[...this.state.chatHistory,msg]
      }))
      console.log(this.state);
    });
  }

  send() {
    console.log("Message sent");
    sendMsg("Message sent");
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <History chatHistory={this.state.chatHistory}/>
        <button onClick={this.send}>Send message</button>
      </div>
    );
  }
}

export default App;
