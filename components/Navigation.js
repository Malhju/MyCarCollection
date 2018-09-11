import React, {Component} from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Home from './Home';
import About from './About';
import PicsMgmt from './PicsMgmt';
import CarSheet from './CarSheet';


const HomeStack = createStackNavigator({
    Home: Home,
    MyCars: CarSheet,
  });

const MyTabNavigation = createBottomTabNavigator({
    Home: HomeStack,
    Photo: PicsMgmt,
    About: About
});


export default class Navigation extends Component {
    render() {
        return(
            <MyTabNavigation/>
        );
    }
}