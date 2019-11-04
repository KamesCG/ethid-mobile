import React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ConnectionPeer from './screens/ConnectionPeer';
import ConnectionCommunity from './screens/ConnectionCommunity';
import ConnectionApplication from './screens/ConnectionApplication';
import ConnectionDefault from './screens/ConnectionDefault';
import {Hamburger} from 'atoms';
const stackNavigator = createStackNavigator(
  {
    ConnectionDefault: {
      screen: ConnectionDefault,
      navigationOptions: {
        title: 'Connections',
      },
    },
    ConnectionPeer: {
      screen: ConnectionPeer,
      navigationOptions: {
        title: 'Friends',
      },
    },
    ConnectionCommunity: {
      screen: ConnectionCommunity,
      navigationOptions: {
        title: 'Commuity',
      },
    },
    ConnectionApplication: {
      screen: ConnectionApplication,
      navigationOptions: {
        title: 'Applications',
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
