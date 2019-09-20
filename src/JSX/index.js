import React from 'react';

const MyButton = (props) => {
  return <button
    style={{
      color: props.color,
      boxShadow: `0 0 ${props.shadowSize}px`
    }}
    type="button">
      {props.children}
    </button>;
};

const jsxBtn = <MyButton color="blue" shadowSize={2}>
  Touch me
</MyButton>;

const vanillaBtn = React.createElement(
  MyButton,
  { color: 'orange', shadowSize: 4 },
  'Touch me orange'
);

function NumberDescriber(props) {
  let description;
  if (props.number % 2 === 0) {
    description = <strong>чётным</strong>;
  } else {
    description = <i>нечётным</i>;
  }
  return <div>{props.number} является {description} числом</div>;
}

const Button = props => {
  const { kind, ...other } = props;
  const className = kind === 'primary' ? 'PrimaryButton' : 'SecondaryButton';
  return <button className={className} {...other} />;
};

function Item(props) {
  return <li>{props.message}</li>;
}

function TodoList() {
  const todos = ['finish doc', 'submit pr', 'nag dan to review'];
  return (
    <ul>
      {todos.map(todo => <Item key={todo} message={todo} />)}
    </ul>
  );
}


function Repeat(props) {
  let items = [];
  for (var i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }

  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {index => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

export { jsxBtn, vanillaBtn, NumberDescriber, Button, TodoList, ListOfTenThings };
