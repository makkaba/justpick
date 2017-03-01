import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configStore from './configStore';

const store = configStore();

export default class Application extends React.Component {
  render() {
    return(
      <Provider store={ store }>
        <App />
      </Provider>
    );
  }
}
