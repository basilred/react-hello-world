import React from 'react';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog({ title, message, children }) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {title}
      </h1>
      <p className="Dialog-message">
        {message}
      </p>
      {children}
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }

  render() {
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />

        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }
}

function SplitPane({ left, right }) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {left}
      </div>
      <div className="SplitPane-right">
        {right}
      </div>
    </div>
  );
}

const Contacts = () => <div className="Contacts">Contacts</div>;
const Chat = () => <div className="Chat">Chat</div>;

function App() {
  return (
    <SplitPane left={<Contacts />} right={<Chat />} />
  );
}

export { WelcomeDialog, App, SignUpDialog };
