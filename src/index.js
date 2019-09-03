import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as JSX from './JSX';

const Tree = () => (
  <div className="Tree">
    {JSX.jsxBtn}
    {JSX.vanillaBtn}
  </div>
);

ReactDOM.render(
  <Tree />,
  document.getElementById('root')
);
