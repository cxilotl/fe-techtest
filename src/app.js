import React from 'react';
import ReactDOM from 'react-dom';
import MultiplicationGrid from './containers/MultiplicationGrid';

import cssStyles from './app.module.scss';

// source goes here
const app = () => {
  const title = 'Which? Javascript exercise';
  const maxNumber = 145;
  const rootEl = document.getElementById('root');
  ReactDOM.render(
    <>
      <h1 className={ cssStyles.title }>{ title }</h1>
      <div className={ cssStyles.layout }>
        <MultiplicationGrid highestMultiplierNumber={ maxNumber } />
      </div>
    </>,
    rootEl
  );
};

export default app;
