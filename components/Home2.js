import React from 'react';
import { Alert, StyleSheet, Text, View, Image, StatusBar, Button, TouchableOpacity, TextInput} from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';


class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden={true}/>
        <Text style={styles.top}></Text>
        <Image source={require('../images/logo_blanc.png')} style={styles.splashImage} />
        <Text style={styles.splashTitle}>Car collection</Text>
        <Text style={styles.default}>David, Julien, Tareq</Text>
        <Text style={styles.default}>House of Code 2018</Text>
        <Text style={styles.default}>Version 0.0.1</Text>
      </View>
    );
  }
}

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden={true}/>
        <Text style={styles.top}></Text>
        <Image source={require('../images/logo_blanc.png')} style={styles.splashImage} />
        <Text style={styles.splashTitle}>Car collection</Text>
        <Text style={styles.default}>David, Julien, Tareq</Text>
        <Text style={styles.default}>House of Code 2018</Text>
        <Text style={styles.default}>Version 0.0.1</Text>

      </View>
    );
  }
}

class DetailsHomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details home screen!</Text>
      </View>
    );
  }
}

class DetailsSettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details settings screen!</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('DetailsHome')}
        />
      </View>
    );
  }
}


class StartScreen extends React.Component {

    render() {
        return(

            <View style= {styles.container}>

            <StatusBar hidden={true}/>

            <TextInput style={{height: 40, width: 400, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value=""/>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ShowACar')}>
              <Image source={require('../images/voiture1.jpg')} style={styles.imageCar} />
            </TouchableOpacity>
            </View>
        );
    }
}


class ShowACarScreen extends React.Component {

    render() {
        return(

            <View style= {styles.container}>

                <StatusBar hidden={true}/>

                <TouchableOpacity>
                  <Image source={require('../images/voiture1.jpg')} style={styles.imageCar} />
                </TouchableOpacity>
                <Text style={styles.showACarText}>Peugeot 808</Text>
                <Text style={styles.showACarText}>Rouge</Text>

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


class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('DetailsSettings')}
        />
      </View>
    );
  }
}

const AboutStack = createStackNavigator({
  Splash: AboutScreen,
  ShowACar: ShowACarScreen,
});

const HomeStack = createStackNavigator({
  Home: StartScreen,
  ShowACar: ShowACarScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  DetailsSettings: DetailsSettingsScreen,
});

export default createBottomTabNavigator(
  {

    Home: HomeStack,
    About: AboutStack,
    //Settings: SettingsStack,
  },
  {
        tabBarOptions: {
          labelStyle: {
          fontSize: 17,
          },
        },
    /* Other configuration remains unchanged */
    }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  default: {
    color: 'white',
  },
  splashImage: {
    resizeMode: Image.resizeMode.contain,
    width: 300,
    height: 100,
    margin: 20,
  },
  splashTitle: {
    flex:1,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  top: {
    flex: 1,
    backgroundColor: '#cccccc'
  },
  imageCar: {
    resizeMode: Image.resizeMode.contain,
    height: 300,
    width: 400,
  },
  showACarText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  }

});
