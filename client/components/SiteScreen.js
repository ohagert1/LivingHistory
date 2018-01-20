import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import Button from 'react-native-button';
import { StackNavigator } from 'react-navigation';
import styles from '../../public/styles';
import Swiper from 'react-native-swiper'
const homeImage = require('../../public/homeImage.png');

const SiteScreen = ({ navigation }) => {
  let site = navigation.state.params.site;
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
};

export default SiteScreen;
