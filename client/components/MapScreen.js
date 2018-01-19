import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import Button from 'react-native-button';
import { StackNavigator } from 'react-navigation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from '../../public/styles';
import store, { getLocation } from '../store';




class MapScreen extends Component{

  constructor(props) {
    super(props);
    this.state={
      location: {
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
  }

  componentDidMount() {
    this.getLocation();
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('coords', position.coords)
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    if(this.props.location.latitude && this.props.location.longitude) {
      return(
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={this.props.location}
          />
        </View>
      );
    }
    return null;
  }
}

function mapState(storeState){
  return{
    location: storeState.location
  }
}

function mapDispatch(dispatch){
  return{
    setLocation: () => dispatch(getLocation(getCurrentLocation()))
  }
}

function getCurrentLocation(){
  const location = {}
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position.coords)
        location.latitude = position.coords.latitude
        location.longitude = position.coords.longitude
    },
    (error) => {
      console.log(error.message)
      location.longitude = 0
      location.latitude = 0
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
  return location
}

export default connect(mapState, mapDispatch)(MapScreen);

