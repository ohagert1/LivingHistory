import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeImage: {
    zIndex: -10,
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeText: {
    zIndex: -8,
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white'
  },
  overlay: {
    backgroundColor: 'red',
    alignSelf: 'stretch',
    width: null,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
