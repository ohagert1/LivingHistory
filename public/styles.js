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
    fontFamily: 'Arial',
    color: 'white'
  },
  transparentContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: '#7F7F7F7F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  centeredText: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  whiteText: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: 'white',
    textShadowColor: 'grey'
  },
  button: {
    borderColor: 'red',
    borderRadius: 1
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

export default styles;