import {StyleSheet} from 'react-native';

const SplashScreenStyle = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#4569E5',
    },
  
    containerTop: {
      flex: 6,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    containerMiddle: {
      flex: 2,
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold'
    },
  
    containerBottom: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default SplashScreenStyle;