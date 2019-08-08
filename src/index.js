import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Page from './chapters1-7';
import ListsKeys from './ListsKeys';

const tree = (
  <div>
    <Page />
    <ListsKeys.List />
    <ListsKeys.NumberList numbers={ListsKeys.numbers} />
  </div>
);

ReactDOM.render(
  tree,
  document.getElementById('root')
);
