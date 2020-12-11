import React from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lama FE FTW
        </p>
        <a
          className="App-link"
          href="https://lama-api.kvarto.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stacks, bugs, plug'n'play
        </a>
      </header>
    </div>
  );
}

export default App;
