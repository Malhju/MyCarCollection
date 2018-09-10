import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import HomeStyle from '../styles/HomeStyle.js';

export default class MyCarCollection extends React.Component {

    render() {
      
      return(
        <View style={HomeStyle.mainContainer}>
            
          <Text style={HomeStyle.container}>My Car Collection</Text>
  
        </View>
      );
    }
  }