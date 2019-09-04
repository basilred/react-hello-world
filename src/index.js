import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as JSX from './JSX';

const Tree = () => (
  <div className="Tree">
    {JSX.jsxBtn}
    {JSX.vanillaBtn}
    <JSX.NumberDescriber number={5} />
    <JSX.NumberDescriber number={12} />
    <JSX.Button kind="primary" onClick={() => console.log('Button pressed')}>
      Hello, world!
    </JSX.Button>
    <JSX.TodoList />
    <JSX.ListOfTenThings />
  </div>
);

ReactDOM.render(
  <Tree />,
  document.getElementById('root')
);
