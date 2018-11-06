import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './app';
import NavBar from '../src/NavBar';

const app = (
  <div className="my-div">
    <App />
    <NavBar />
  </div>
);

render(app, NavBar, document.getElementById('root'));
