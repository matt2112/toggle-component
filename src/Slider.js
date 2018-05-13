// @flow
import React from 'react';

import './Slider.css';

type Props = {
  correct: string,
  incorrect: string,
  correctOnLeft: boolean,
  toggleOnLeft: boolean,
  index: number,
  onClick: (idx: number) => void
};

const Slider = (props: Props) => (
  <div
    className="slider-outer"
    onClick={() => props.onClick(props.index)}
    onKeyPress={() => props.onClick(props.index)}
    role="slider"
    tabIndex="0"
    aria-valuemin={0}
    aria-valuemax={1}
    aria-valuenow={props.toggleOnLeft ? 'left' : 'right'}
  >
    <div className={`slider-inner ${props.toggleOnLeft ? 'left-toggle' : 'right-toggle'}`} />
    <h3 className="text-left">{props.correctOnLeft ? props.correct : props.incorrect}</h3>
    <h3 className="text-right">{props.correctOnLeft ? props.incorrect : props.correct}</h3>
  </div>
);

export default Slider;
