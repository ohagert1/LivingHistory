import React from 'react';
import { Text, View, Image } from 'react-native';
import Button from 'react-native-button';
import { StackNavigator } from 'react-navigation';
import styles from '../../public/styles';
const homeImage = require('../../public/homeImage.png');

const SiteScreen = ({ navigation }) => {
  let site = navigation.state.params.site;
  return (
    <View style={styles.siteContainer}>
      {
        site.Photos.map((photo) => (
            <Image
            style={styles.siteImage}
            source={{uri: photo.url}}
            key={{id: photo.id}}/>
          )
        )
      }
      <View style={styles.siteTextContainer}>
        <Text style={styles.siteName}>{site.name}</Text>
        <Text style={styles.siteDescription}>{site.description}</Text>
      </View>
    </View>
  )
};

export default SiteScreen;
