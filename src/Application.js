import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configStore from './configStore';
import { Router, Route, BrowseHistory } from 'react-router';
const store = configStore();

export default class Application extends Component {
  render() {
    return(
      <Provider store={ store }>
        <App />
      </Provider>
    );
  }
}
