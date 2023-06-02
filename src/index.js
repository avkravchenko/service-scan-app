import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux'
import {reducer} from './store/reducer'


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router> 
    </React.StrictMode>
  </Provider>
);

