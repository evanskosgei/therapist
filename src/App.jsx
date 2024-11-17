/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './routing';
import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store'


function App() {

  return (
    <Router>
      <ToastContainer />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routing />
        </PersistGate>
      </Provider>
    </Router>
  )
}

export default App
