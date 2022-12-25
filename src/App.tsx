import React, { FC } from 'react';
import Happy from './components/Happy';
import HappyCount from './components/HappyCount';
import Sad from './components/Sad';
import SadCount from './components/SadCount';

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return (
    <>
      <HappyCount />
      <SadCount />
      <Happy />
      <Sad />
    </>
  );
};

export default App;
