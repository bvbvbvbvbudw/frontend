import React, { useState } from 'react';

function ComponentThree(props) {

  const [userInput, setUserInput] = useState('');

  const inputText = (event) => {
    setUserInput(event.target.value);
  }

  return (
    <>
      <input type='text' onChange={inputText} value={userInput} />
      <div>{userInput}</div>
    </>
  );
}

export default ComponentThree;
