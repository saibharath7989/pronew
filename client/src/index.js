import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/lumen/bootstrap.css';
import { HashRouter } from 'react-router-dom'; // new
import './index.css';
import App from './App';

ReactDOM.render( // changed
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);