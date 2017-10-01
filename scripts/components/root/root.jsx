import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from '../app/app';

const Root = () => {
  return (
    <HashRouter>
      <App/>
    </HashRouter>
  );
};

export default Root;
