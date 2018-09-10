import React from 'react';

import {
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';

import GeneralStyle from '../styles/GeneralStyle.js';

export default class About extends React.Component {

    render() {
      
      return(
        <View style={GeneralStyle.container}>
        <StatusBar hidden={true}/>
          <Text style={GeneralStyle.top}></Text>
          <Image source={require('../images/logo_blanc.png')} style={GeneralStyle.splashImage} />
          <Text style={GeneralStyle.splashTitle}>Car collection</Text>
          <Text style={GeneralStyle.default}>David, Julien, Tareq</Text>
          <Text style={GeneralStyle.default}>House of Code 2018</Text>
          <Text style={GeneralStyle.default}>Version 0.0.1</Text>
  
        </View>
      );
    }
  }