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

export { jsxBtn, vanillaBtn, NumberDescriber };
