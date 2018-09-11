import React from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';

import GeneralStyle from '../styles/GeneralStyle.js';

export default class Home extends React.Component {

    render() {
        return(
        <View style={GeneralStyle.mainContainer}>
    
            <TextInput 
            //style={{ flex: 1, height: 40, width: 400, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                        value=""
            />
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MyCars')}>
                <Image source={require('../usr/img/voiture1.jpg') } style={GeneralStyle.imageCar}/>
            </TouchableOpacity>
            
            <View>

            </View>
        
        </View>
        );
    }
}

