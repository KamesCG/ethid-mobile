import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Authentication from '@screens/Authentication';
import DrawerNavigation from './DrawerNavigation';

const MainStack = createSwitchNavigator(
  {
    Authentication,
    Main: {
      screen: DrawerNavigation,
    },
  },
  {
    initialRouteName: 'Authentication',
    headerMode: 'none',
    mode: 'modal',
    defaultNavigationOptions: {
      gesturesEnabled: true,
    },
  },
);

export default createAppContainer(MainStack);
