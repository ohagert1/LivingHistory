import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import styles from './public/styles';
import store from './client/store';
import Navigator from './client/components';

export default class App extends React.Component {

  render() {
    return (
          <Provider store={store}>
            <Navigator />
          </Provider>
    );
  }
}
