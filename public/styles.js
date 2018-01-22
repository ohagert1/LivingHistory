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
  },
  siteContainer: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#edecee'
  },
  siteImage: {
    flex: 1.3
  },
  siteTextContainer: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center'
  },
  siteName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  siteDescription: {
    marginTop: 20,
    textAlign: 'center'
  },
  testButton: {
    zIndex: 1,
    height: 1
  },
  flexHorizontal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 0.5
  },
  siteButtons: {
    flex: 1,
    borderWidth: 0.5
  },
  siteButtonsText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  }
});

export default styles;
