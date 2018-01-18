import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './public/styles';
import Home from './client/components/Home';

const RootNavigator = StackNavigator({
  Main: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'LivingHistory'
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}
