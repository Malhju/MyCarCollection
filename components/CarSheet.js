import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    Button,
    Image,
    StatusBar,
    Alert
} from 'react-native';

import CarSheetStyle from '../styles/CarSheetStyle.js';

export default class CarSheet extends React.Component {

    render() {
      
      return(
            
         <View style= {CarSheetStyle.container}>

            <StatusBar hidden={true}/>

            <TouchableOpacity>
                <Image source={require('../images/voiture1.jpg')} style={CarSheetStyle.imageCar} />
            </TouchableOpacity>
            <Text style={CarSheetStyle.showACarText}>Peugeot 808</Text>
            <Text style={CarSheetStyle.showACarText}>Rouge</Text>

            <Button title="Supprimer" onPress={() =>
                Alert.alert(
                'Voulez-vous supprimer définitivement cette fiche de votre collection ?',
                'Cette action est irréversible...',
                [
                {text: 'Oui', onPress: () => this.props.navigation.navigate('Home')},
                {text: 'Non', onPress: () => ''},
                ],
                {cancelable: false}
                )}/>

            <Button title="Afficher La Carte"onPress={() => this.props.navigation.navigate('Home')}/>

        </View>
  
      );
    }
  }