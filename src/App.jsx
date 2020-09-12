import { CssBaseline, GeistProvider } from '@geist-ui/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import Homepage from './screens/Homepage';

import rootReducer from './store';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const App = () => {
  return (
    <Provider store={store}>
      <GeistProvider>
        <CssBaseline />
        <Homepage />
      </GeistProvider>
    </Provider>
  );
};

export default App;
