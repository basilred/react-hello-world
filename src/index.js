import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ListItem({ item }) {
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}

const items = [
  { id: 1, term: 'iphone', description: 'mobile phone' },
  { id: 2, term: 'apple', description: 'fruit' },
];

ReactDOM.render(
  <Glossary items={items}/>,
  document.getElementById('root')
);
