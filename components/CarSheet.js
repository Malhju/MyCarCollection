import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import GeneralStyle from '../styles/GeneralStyle.js';

export default class CarSheet extends React.Component {

    render() {
      
      return(
        <View style={GeneralStyle.mainContainer}>
            
          <Text style={GeneralStyle.container}>Car Sheet</Text>
  
        </View>
      );
    }
  }