import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import Button from './components/Button/Button.jsx';

const App = () => {
  return (
    <>
      <Button text="text"/>
    </>
  )
}



// render(
//     <App />,
//     document.getElementById("root")
// );

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);