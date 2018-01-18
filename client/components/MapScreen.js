import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import Button from 'react-native-button'
import { StackNavigator } from 'react-navigation';
import styles from '../../public/styles';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const MapScreen = ({ navigation }) => (
    <MapView
      initialRegion={{
        latitude: 40.7128,
        longitude: 74.0060,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    />
);

export default MapScreen;
