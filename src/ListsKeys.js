import React from 'react';

const numbers = [1, 2, 3, 4, 5];

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number =>
    <ListItem key={number.toString()} value={number} />
  );

  return <ul>{listItems}</ul>;
}


const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map(post =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );

  const content = props.posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

export {
  NumberList,
  numbers,
  Blog,
  posts,
};
