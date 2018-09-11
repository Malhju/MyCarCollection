import React from 'react';

import {
    View,
    Text,
    Image,
    ActivityIndicator
} from 'react-native';

import SplashScreenStyle from '../styles/SplashScreenStyle.js';

export default class SplashScreen extends React.Component {

    render() {
      
      return(
        <View style={SplashScreenStyle.container}>
                   
          <View style={SplashScreenStyle.containerTop}>
            <Image  source={require("../src/img/logo_blanc.png")}
                    style={{
                      resizeMode: Image.resizeMode.contain,
                      width: 200,
                      height: 200 }}
            />
          </View>
          
          <Text style={SplashScreenStyle.containerMiddle}>Cars Photo Collection</Text>
          
          <ActivityIndicator  style={SplashScreenStyle.containerBottom}
                              size = "large"
                              color = "#ffffff"
          />
  
        </View>
      );
    }
  }