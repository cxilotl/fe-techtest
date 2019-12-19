import React from 'react';
import ReactDOM from 'react-dom';

// source goes here
const app = () => {
  const rootEl = document.getElementById('root');
  const title = 'This is my React test';
  ReactDOM.render(
    <div>
      <div>{ title }</div>
      <div>
        Test
      </div>
    </div>,
    rootEl
  );
};

export default app;
