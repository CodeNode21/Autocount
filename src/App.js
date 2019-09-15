import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/jumbotron';
import FileDump from './components/filedump';

function App() {
  return (
    <div className="frontpage">
      <div className="container">
        <Jumbotron />
        <FileDump />
      </div>
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </div>
  );
}

export default App;
