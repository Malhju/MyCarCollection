import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import GeneralStyle from '../styles/GeneralStyle.js';
import HomeScreen from './Navigation.js';
import AboutScreen from './Navigation.js';

export default class Home extends React.Component {

  render() {
    
    return(
      <View style={GeneralStyle.mainContainer}>
        <Text style={GeneralStyle.container}>Home</Text>
      </View>
    );
  }
}

