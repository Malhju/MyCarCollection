import {StyleSheet, Image} from 'react-native';

const GeneralStyle = StyleSheet.create({
 
    mainContainer:
    {
        flex: 1,
    },

    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },

    default: {
      color: 'white',
    },

    splashImage: {
      resizeMode: Image.resizeMode.contain,
      width: 300,
      height: 100,
      margin: 20,
    },

    splashTitle: {
      flex:1,
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold'
    },

    top: {
      flex: 1,
      backgroundColor: '#cccccc'
    },

    imageCar: {
      resizeMode: Image.resizeMode.contain,
      height: 300,
      width: 400,
    },
    
    showACarText: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold'
    }
  });

export default GeneralStyle;