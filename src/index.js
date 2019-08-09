import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Page from './chapters1-7';
import { NumberList, numbers, Blog, posts } from './ListsKeys';
import { NameForm, EssayForm } from './Forms';

const tree = (
  <div>
    <Page />
    <NumberList numbers={numbers} />
    <Blog posts={posts} />
    <NameForm />
    <EssayForm />
  </div>
);

ReactDOM.render(
  tree,
  document.getElementById('root')
);
