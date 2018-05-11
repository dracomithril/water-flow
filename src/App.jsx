import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
