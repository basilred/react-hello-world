import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Page from './chapters1-7';
import { NumberList, numbers, Blog, posts } from './ListsKeys';
import { NameForm, EssayForm, FlavorForm, Reservation } from './Forms';
import Calculator from './LiftingStateUp';
import { WelcomeDialog, App, SignUpDialog } from './CompositionVsInheritance';

const tree = (
  <div>
    <Page />
    <NumberList numbers={numbers} />
    <Blog posts={posts} />
    <NameForm />
    <EssayForm />
    <FlavorForm />
    <Reservation />
    <Calculator />
    <WelcomeDialog />
    <App />
    <SignUpDialog />
  </div>
);

ReactDOM.render(
  tree,
  document.getElementById('root')
);
