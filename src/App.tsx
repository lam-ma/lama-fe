import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import MainRouter from "./Routes";
import {AppProvider} from "./context";

function App() {
  return (
    <div className="App">
        <AppProvider>
            <MainRouter />
        </AppProvider>
    </div>
  );
}

export default App;
