import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "fad-react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import reportWebVitals from './reportWebVitals';

import { AppRouter } from './Modules/Router/Router';

import { store } from './App/store';
import { persistor } from './App/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
);


reportWebVitals();
