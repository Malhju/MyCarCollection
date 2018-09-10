import React from 'react';


import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';

import GeneralStyle from '../styles/GeneralStyle.js';
// import CarSheet from './CarSheet';



export default class Home extends React.Component {

  render() {
    
    return(
      <View style={GeneralStyle.container}>
  
        <TextInput style={{height: 40, width: 400, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value=""/>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MyCars')}>
              <Image source={require('../images/voiture1.jpg') } style={GeneralStyle.imageCar}/>
            </TouchableOpacity>
      </View>
    );
  }
}

