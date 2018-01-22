import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import Button from 'react-native-button';
import { StackNavigator } from 'react-navigation';
import styles from '../../public/styles';
import Swiper from 'react-native-swiper';
const homeImage = require('../../public/homeImage.png');

class SiteScreen extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let site = this.props.navigation.state.params.site
    if(site) {
      return (
        <View style={styles.siteContainer}>
          <View style={styles.siteImage}>
          <Swiper>
              {
                site.Photos.map((photo) => (
                    <View key={{id: photo.id}} style={styles.siteImage}>
                      <Image
                      source={{uri: photo.url}} style={styles.siteImage}/>
                    </View>
                  )
                )
              }
          </Swiper>
          </View>
          <View style={styles.siteTextContainer}>
            <ScrollView>
              <Text style={styles.siteName}>{site.name}</Text>
              <Text style={styles.siteDescription}>{site.description}</Text>
            </ScrollView>
          </View>
        </View>
      )
    } else {
      return(<Text>NO</Text>)
    }

  }
};

export default SiteScreen;
