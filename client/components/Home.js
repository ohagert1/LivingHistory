import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import Button from 'react-native-button'
import { StackNavigator } from 'react-navigation';
import styles from '../../public/styles';
const homeImage = require('../../public/homeImage.png');

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground
      source={{uri: 'https://twistedsifter.files.wordpress.com/2013/09/vintage-photos-of-new-york-superimposed-onto-present-day-pics-marc-hermann-3.jpg?w=800&h=595&zoom=2'}}
      style={styles.homeImage}
    >
    <View style={styles.transparentContainer}>
      <Text style={styles.homeText}>LivingHistory</Text>
      <Button style={styles.button} onPress={() => navigation.navigate('MapScreen')}>
        <Text style={styles.whiteText}>Use as Guest</Text>
      </Button>
    </View>
    </ImageBackground>
  </View>
);

export default Home;
