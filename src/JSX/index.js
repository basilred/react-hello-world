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

export { jsxBtn, vanillaBtn };
