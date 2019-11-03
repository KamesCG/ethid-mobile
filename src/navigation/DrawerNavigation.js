import {createDrawerNavigator} from 'react-navigation-drawer';

import {colors} from '@styles';
import Profile from '@screens/Profile';
import Storage from '@screens/Journey';
import SideMenu from './SideMenu';
// Profile Connections
import Guide from '@screens/Guide';
import Connection from '@screens/Connection';

const DrawerNavigator = createDrawerNavigator(
  {
    Connection,
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Account',
      },
    },
    Storage: {
      screen: Storage,
      navigationOptions: {
        title: 'Storage',
      },
    },
    Communication: {
      screen: Storage,
      navigationOptions: {
        title: 'Messaging',
      },
    },
    Guide: {
      screen: Guide,
      navigationOptions: {
        title: 'Guide',
      },
    },
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'Profile',
    hideStatusBar: false,
    drawerPosition: 'left',
    drawerBackgroundColor: 'rgba(255,255,255,1)',
    drawerType: 'front',
    overlayColor: 'rgba(255,255,255,.3)',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: colors.primary,
    },
  },
);

export default DrawerNavigator;
