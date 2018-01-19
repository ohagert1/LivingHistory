import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import styles from '../../public/styles';
import store from '..//store';
import Home from './Home';
import MapScreen from './MapScreen';

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
