import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import MainTabNavigator from './tabNavigator';
import {Hamburger} from 'atoms';

const stackNavigator = createStackNavigator(
  {
    Account: {
      screen: MainTabNavigator,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
);

export default stackNavigator;
