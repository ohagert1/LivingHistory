import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import styles from '../../public/styles';
import store from '..//store';
import Home from './Home';
import MapScreen from './MapScreen';
import SiteScreen from './SiteScreen';

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
  },
  SiteScreen: {
    screen: SiteScreen
  }
});

export default class Navigator extends React.Component {

  render() {
    return (
          <RootNavigator />
    );
  }
}
