import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './public/styles';
import Home from './client/components/Home';
import MapScreen from './client/components/MapScreen';

const RootNavigator = StackNavigator({
  Main: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'LivingHistory'
    }
  },
  MapScreen: {
    screen: MapScreen,
    navigationOptions: {
      headerTitle: 'Historical Locations'
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
