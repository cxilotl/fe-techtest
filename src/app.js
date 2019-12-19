import React from 'react';
import ReactDOM from 'react-dom';

import cssStyles from './app.css';

// source goes here
const app = () => {
  const rootEl = document.getElementById('root');
  const title = 'Which? Javascript exercise';
  ReactDOM.render(
    <div>
      <h1>{ title }</h1>
      <div className={ cssStyles.layout }>
        Test
      </div>
    </div>,
    rootEl
  );
};

export default app;
