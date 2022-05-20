import React from 'react';
import { createRoot } from 'react-dom/client';

import Button from './components/Button/Button.jsx';

const App = () => {
  return (
    <>
    <h1>test!</h1>
      <Button text={'text'}/>
      <Button text={'text1'}/>
    </>
  )
}


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);

