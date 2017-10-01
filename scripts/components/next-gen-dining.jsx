import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root/root';


document.addEventListener('DOMContentLoaded', () => {
  let rootEl = document.getElementById('root');
  ReactDOM.render(<Root/>, rootEl);
});
