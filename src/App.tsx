import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import StartButton from './Pages/StartQuiz/index';
import './App.css';

function App() {
  return (
    <div className="App">
        <p>
          Quizzing time!
        </p>
        <StartButton />
    </div>
  );
}

export default App;
