// @flow
import React, { Component } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import uniqueId from 'lodash/uniqueId';
import './App.css';

import Slider from './Slider';

type Props = {};

type State = {
  allCorrect: boolean,
  question: string,
  options: Array<{
    correct: string,
    incorrect: string,
    correctOnLeft: boolean,
    toggleOnLeft: boolean,
    id: string
  }>
};

class App extends Component<Props, State> {
  state = {
    allCorrect: false,
    question: 'An animal cell contains:',
    options: [
      {
        correct: 'Ribosomes',
        incorrect: 'Cell wall',
        correctOnLeft: false,
        toggleOnLeft: false,
        id: uniqueId('option')
      },
      {
        correct: 'Cytoplasm',
        incorrect: 'Chloroplast',
        correctOnLeft: true,
        toggleOnLeft: false,
        id: uniqueId('option')
      },
      {
        correct: 'Partially permeable membrane',
        incorrect: 'Impermeable membrane',
        correctOnLeft: true,
        toggleOnLeft: false,
        id: uniqueId('option')
      },
      {
        correct: 'Cellulose',
        incorrect: 'Mitochondria',
        correctOnLeft: false,
        toggleOnLeft: true,
        id: uniqueId('option')
      }
    ]
  };

  checkIfAllCorrect = () => {
    const allCorrect = this.state.options.every(
      option => option.correctOnLeft === option.toggleOnLeft
    );
    this.setState({
      allCorrect
    });
  };

  clickSlider = (idx: number) => {
    this.setState(
      (prevState) => {
        const options = cloneDeep(prevState.options);
        options[idx].toggleOnLeft = !options[idx].toggleOnLeft;
        return {
          options
        };
      },
      () => this.checkIfAllCorrect()
    );
  };

  render() {
    const { allCorrect, question, options } = this.state;
    return (
      <div id="App">
        <div id="Wrapper">
          <h1 id="Question">{question}</h1>
          <div id="Sliders">
            {options.map((option, idx) => (
              <Slider key={option.id} index={idx} onClick={this.clickSlider} {...option} />
            ))}
          </div>
          <h2 id="Answer">The answer is {allCorrect ? 'correct!' : 'incorrect.'}</h2>
        </div>
      </div>
    );
  }
}

export default App;
