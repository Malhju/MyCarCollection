import React from 'react';
import {
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';

import GeneralStyle from '../styles/GeneralStyle.js';

export default class Home extends React.Component {

    render() {
        return(
        <View style={GeneralStyle.mainContainer}>
            
            <View style={GeneralStyle.containerTop}>
                <View style={GeneralStyle.secureBlock}/>
                <TextInput 
                        style= {GeneralStyle.inputText}
                        onChangeText={(text) => this.setState({text})}
                        value=""
                />
                <View style={GeneralStyle.reachImg}/>
                 <View style={GeneralStyle.secureBlock}/>
            </View>
            
            <View style={GeneralStyle.containerMiddle}>
                
                <View style={GeneralStyle.secureBlock}/>
                
                <View style={GeneralStyle.subContainerMiddle}>
                    <View style={GeneralStyle.secureBlock}/>
                    <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('MyCars')}
                            style={GeneralStyle.imageCar}>
                        <Image source={require('../usr/img/voiture1.jpg') } style={GeneralStyle.imageCar} resizeMode="contain"/>
                    </TouchableOpacity>
                    <View style={GeneralStyle.secureBlock}/>
                    <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('MyCars')}
                            style={GeneralStyle.imageCar}>
                        <Image source={require('../usr/img/voiture1.jpg') } style={GeneralStyle.imageCar} resizeMode="contain"/>
                    </TouchableOpacity>
                    <View style={GeneralStyle.secureBlock}/>
                </View>
                
                
                <View style={GeneralStyle.secureBlock}/>

                 <View style={GeneralStyle.subContainerMiddle}>
                    <View style={GeneralStyle.secureBlock}/>
                    <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('MyCars')}
                            style={GeneralStyle.imageCar}>
                        <Image source={require('../usr/img/voiture1.jpg') } style={GeneralStyle.imageCar} resizeMode="contain"/>
                    </TouchableOpacity>
                    <View style={GeneralStyle.secureBlock}/>
                    <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('MyCars')}
                            style={GeneralStyle.imageCar}
                    >
                        <Image source={require('../usr/img/voiture1.jpg') } style={GeneralStyle.imageCar} resizeMode="contain"/>
                    </TouchableOpacity>
                    <View style={GeneralStyle.secureBlock}/>
                </View>

                <View style={GeneralStyle.secureBlock}/>
            </View>

            <View style={GeneralStyle.containerBottom}>
                <View style={GeneralStyle.secureBlock}/>
                <View style={GeneralStyle.button}/>
                <View style={GeneralStyle.secureBlock}/>
                <View style={GeneralStyle.button}/>
                <View style={GeneralStyle.secureBlock}/>
            </View>
        
        </View>
        );
    }
}

