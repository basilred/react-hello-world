import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { List, withLogs } from './HOC';

const ListWithLogs = withLogs(List);
let list = ['first', 'second', 'third'];

ReactDOM.render(
  <ListWithLogs list={list} />,
  document.getElementById('root')
);

list = ['odin', 'dva', 'tree'];

ReactDOM.render(
  <ListWithLogs list={list} />,
  document.getElementById('root')
);
