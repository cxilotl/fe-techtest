import React from 'react';
import ReactDOM from 'react-dom';

// source goes here
const app = () => {
  console.log('hello from app!');
  const rootEl = document.getElementById('root');
  ReactDOM.render(
    <>
      <div>This is my React test</div>
    </>,
    rootEl
  );
};

export default app;
