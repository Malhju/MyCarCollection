import React, {Component} from 'react';

import {
  StyleSheet,
  StatusBar,
  View} from 'react-native';

import SplashScreen from './components/SplashScreen';

import Navigation from './components/Navigation';

export default class Myapp extends Component
{
  constructor(){
    super();

    this.state={
      isVisible : true,
    }
  }

  Hide_Splash_Screen = ()=>{
    this.setState({
      isVisible : false
    });
  }

  componentDidMount(){
    var that = this;

    setTimeout(function(){
      that.Hide_Splash_Screen();
    }, 1000);
  }

    render()
    {
        return(
            <View style = {styles.mainContainer }>
              <StatusBar hidden={true}/>
              { (this.state.isVisible === true) ? <SplashScreen/> : <Navigation/> }
            </View>
        );
    }
}

const styles = StyleSheet.create(
{
    mainContainer:
    {
        flex: 1,
    },
});
