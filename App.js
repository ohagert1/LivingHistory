import React from 'react';
import { Text, View } from 'react-native';
import styles from './public/styles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LivingHistory</Text>
      </View>
    );
  }
}
