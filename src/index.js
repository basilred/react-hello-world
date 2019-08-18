import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Columns from './Fragments/Fragments';

const Table = () => (
  <table>
    <tbody>
      <tr>
        <Columns />
      </tr>
    </tbody>
  </table>
);

ReactDOM.render(
  <Table />,
  document.getElementById('root')
);
