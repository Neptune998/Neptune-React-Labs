import React from 'react';
import Greeting from './Greeting';

function App() {
  const name = 'John';

  return (
    <>
      <Greeting name={name} />
    </>
  );
}

export default App;
