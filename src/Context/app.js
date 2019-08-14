import React from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    // Состояние хранит функцию для обновления контекста,
    // которая будет также передана в Provider-компонент.
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // Всё состояние передаётся в качестве значения контекста
    return (
        <ThemeContext.Provider value={this.state}>
          <Content />
        </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}
