import { CssBaseline, GeistProvider } from '@geist-ui/react';
import React from 'react';

import Homepage from './screens/Homepage';

const App = () => {
  return (
    <GeistProvider>
      <CssBaseline />
      <Homepage />
    </GeistProvider>
  );
};

export default App;
