import React, {Component} from 'react';
import {Text} from 'react-native';

import { store } from './store';
import { Provider } from 'react-redux';

import App from './App';
import FormValidation from './FormValidation';

class Index extends Component {
  render() {
    return (
        <Provider store={store}>
        <FormValidation />
        </Provider>
    )
  }
}

export default Index;
