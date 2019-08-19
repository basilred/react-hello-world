import React from 'react';

class List extends React.Component {
  render() {
    return (
      <ul className="List">
        {this.props.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}

// HOC
function withLogs(WrappedComponent) {
  return class extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log('Current props: ', this.props);
      console.log('Next props: ', nextProps);
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
}

export { List, withLogs };
