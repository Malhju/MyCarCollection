import React, {Component} from 'react';
import {
  StatusBar,
  View } from 'react-native';

// COMPOSANTS
import SplashScreen from './components/SplashScreen';
import Navigation from './components/Navigation';

//STYLES
import GeneralStyle from './styles/GeneralStyle';

export default class Myapp extends Component
{
  constructor(){
    super();

    this.state={
        isVisible : true,
    }
  }

  componentDidMount(){
    var self = this;

    setTimeout(function(){
        self.setState({ isVisible : false });
    }, 1);
  }

    render()
    {
        return(
            <View style = {GeneralStyle.mainContainer }>
              <StatusBar hidden={true}/>
              { (this.state.isVisible === true) ? <SplashScreen/> : <Navigation/> }
            </View>
        );
    }
}
