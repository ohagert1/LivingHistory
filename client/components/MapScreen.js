import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from '../../public/styles';
import store, { getLocation, fetchSites } from '../store';

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
  this.watchId = navigator.geolocation.watchPosition(
    (position) => {
      location.latitude = position.coords.latitude;
      location.longitude = position.coords.longitude;
      this.props.setLocation(location);
      this.props.loadNearbySites(location);
    },
    (error) => {
      console.log(error.message);
      location.longitude = 0;
      location.latitude = 0;
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
}

  render() {
    let location = this.props.location;
    if(location.latitude && location.longitude && this.props.sites.length) {
        return(
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              region={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
              showsUserLocation={true}
              followsUserLocation={true}
            >
            {
              this.props.sites.map(site => {
                return(
                  <MapView.Marker
                    coordinate={{latitude: +site.latitude, longitude: +site.longitude}}
                    key={site.id}
                  />
                  )

                }
              )
            }
            </MapView>
          </View>
      );
    }
    return <Text>NOPE</Text>
  }
}

function mapState(storeState){
  return{
    location: storeState.location,
    sites: storeState.sites
  }
}

function mapDispatch(dispatch){
  return{
    setLocation: (location) => dispatch(getLocation(location)),
    loadNearbySites: (location) => dispatch(fetchSites(location))
  }
}

export default connect(mapState, mapDispatch)(MapScreen);

