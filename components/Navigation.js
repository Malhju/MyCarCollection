import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './Home';
import About from './About';
import Settings from './Settings';

const MyTabNavigation = createBottomTabNavigator({
  Home: Home,
  Settings: Settings,
  About: About,
});

export default class Navigation extends Component {
    render() {
        return(
            <MyTabNavigation/>
        );
    }
}