import React from 'react';
import { createRoot } from 'react-dom/client';
import chime1 from './sounds/chime1.mp3'
import coin1 from './sounds/coin1.mp3'
import coin2 from './sounds/coin2.mp3'
import coin3 from './sounds/coin3.mp3'
import ding1 from './sounds/ding1.mp3'
import ding2 from './sounds/ding2.mp3'
import ding3 from './sounds/ding3.mp3'
import ding4 from './sounds/ding4.mp3'


import Button from './components/Button/Button.jsx';

const App = () => {
  return (
    <>
    <h1>Soundboard</h1>
      <Button text={'chime'} audio={chime1}/>
      <Button text={'coin1'} audio={coin1}/>
      <Button text={'coin2'} audio={coin2}/>
      <Button text={'coin3'} audio={coin3}/>
      <Button text={'ding1'} audio={ding1}/>
      <Button text={'ding2'} audio={ding2}/>
      <Button text={'ding3'} audio={ding3}/>
      <Button text={'ding4'} audio={ding4}/>
    </>
  )
}


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);

