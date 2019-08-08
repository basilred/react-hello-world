import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Page from './chapters1-7';
import { NumberList, numbers } from './ListsKeys';

const tree = (
  <div>
    <Page />
    <NumberList numbers={numbers} />
  </div>
);

ReactDOM.render(
  tree,
  document.getElementById('root')
);
