import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from '../../public/styles';
import store, { getLocation } from '../store';

class MapScreen extends Component{

  constructor(props) {
    super(props);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
  }

  componentDidMount() {
    this.getCurrentLocation();
  }

  getCurrentLocation(){
  let location = {};
  navigator.geolocation.getCurrentPosition(
    (position) => {
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
  console.log('dispatching', location.latitude)
  this.props.setLocation(location);
}

  render() {
    let location = this.props.location
    console.log('render', location)
    if(this.props.location) {
        return(
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            />
          </View>
      );
    }
    return <Text>NOPE</Text>
  }
}

function mapState(storeState){
  console.log('state of store', storeState)
  return{
    location: storeState.location
  }
}

function mapDispatch(dispatch){
  return{
    setLocation: (location) => dispatch(getLocation(location))
  }
}



export default connect(mapState, mapDispatch)(MapScreen);

