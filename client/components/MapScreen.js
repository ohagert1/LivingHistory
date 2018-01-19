import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import Button from 'react-native-button'
import { StackNavigator } from 'react-navigation';
import styles from '../../public/styles';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const MapScreen = ({ navigation }) => (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    </View>
);

export default MapScreen;
