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
      const {name, listed, ...passThroughProps} = this.props;
      console.log('Own props: ', [name, listed]);
      console.log('Original props: ', passThroughProps);

      return (
        <WrappedComponent {...passThroughProps} />
      );
    }
  }
}

export { List, withLogs };
