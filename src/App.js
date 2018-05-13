// @flow
import React, { Component } from 'react';
import './App.css';

import Slider from './Slider';

class App extends Component {
  state = {
    correct: false,
    question: 'What is the answer?'
  };

  render() {
    const { correct, question } = this.state;
    return (
      <div id="App">
        <div id="Wrapper">
          <h1 id="Question">{question}</h1>
          <div id="Sliders">
            <Slider />
            <Slider />
            <Slider />
          </div>
          <h2 id="Answer">The answer is {correct ? 'correct!' : 'incorrect.'}</h2>
        </div>
      </div>
    );
  }
}

export default App;
