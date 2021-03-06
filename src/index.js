import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './service/reducers/index'

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store} >
  <ThemeProvider theme={theme}>
  <Router>
    <App />
  </Router>
  </ThemeProvider>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
