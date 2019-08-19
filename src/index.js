import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { List, withLogs } from './HOC';

const ListWithLogs = withLogs(List);
const list = ['first', 'second', 'third'];

const Tree = () => (
  <div className="Tree">
    <List list={list} />
    <ListWithLogs name="Logs" listed={true} list={list} />
  </div>
);

ReactDOM.render(
  <Tree />,
  document.getElementById('root')
);
