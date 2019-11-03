import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import MainTabNavigator from './tabNavigator';
import {Hamburger} from 'atoms';

const stackNavigator = createStackNavigator(
  {
    Account: {
      screen: MainTabNavigator,
      navigationOptions: {
        title: 'Account',
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerRight: <Hamburger navigation={navigation} />,
    }),
  },
);

export default stackNavigator;
