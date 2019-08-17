import React from 'react';

export default function CustomTextInput(props) {
  // переменная textInput должна быть объявлена на верхнем уровне,
  // чтобы реф мог иметь к ней доступ
  const textInput = React.createRef();

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input type="text" ref={textInput} />
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}
