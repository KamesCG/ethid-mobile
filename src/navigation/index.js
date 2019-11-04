import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Hamburger} from 'atoms';
import {createStackNavigator} from 'react-navigation-stack';
import Authentication from '@screens/Authentication';
import QRScanner from '@screens/QRScanner';
import WalletRequests from '@screens/WalletRequests';
import Wallet from '@screens/Wallet';
import DrawerNavigation from './DrawerNavigation';

const MainStack = createStackNavigator(
  {
    Authentication: {
      screen: Authentication,
      navigationOptions: {
        header: false,
      },
    },
    Main: {
      screen: DrawerNavigation,
      navigationOptions: {
        headerShown: true,
        headerTitle: 'Account',
      },
    },
    QRScanner,
    WalletRequests,
    Wallet: {
      screen: Wallet,
      navigationOptions: {
        headerShown: true,
        headerTitle: 'Wallet',
      },
    },
  },
  {
    initialRouteName: 'Authentication',
    mode: 'modal',
    // https://reactnavigation.org/docs/en/stack-navigator.html#navigationoptions-for-screens-inside-of-the-navigator
    defaultNavigationOptions: ({navigation}) => ({
      headerShown: false,
      headerMode: 'none',
      gesturesEnabled: true,
      headerRight: <Hamburger navigation={navigation} />,
    }),
  },
);

export default createAppContainer(MainStack);
