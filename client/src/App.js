// import React from 'react';
// import logo from './logo.svg';
import React, { Component} from 'react'
import './App.css';
import Upload from '../../server/upload'
// import Jumbotron from './components/jumbotron';
// import FileDump from './components/filedump';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Card">
          <Upload />
        </div>
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="frontpage">
//       <div className="container">
//         <Jumbotron />
//         <FileDump />
//       </div>
    
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//     </div>
//   );
// }

export default App;
