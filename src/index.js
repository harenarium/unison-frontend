import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from './store.js';

console.log("store.getState() =", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={withRouter(App)} />
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
