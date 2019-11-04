/* --- Global --- */
import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

/* --- Local --- */
import {TabBottomIcon} from 'molecules';

/* --- Module --- */
import Public from './tabs/Profile';
import Updates from './tabs/Updates';
import Requests from './tabs/Requests';

export default createBottomTabNavigator(
  {
    Identity: Public,
    Updates,
    Requests,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Identity':
            iconSource =
              'https://image.flaticon.com/icons/svg/2189/2189488.svg';
            break;
          case 'Updates':
            iconSource =
              'https://image.flaticon.com/icons/svg/1156/1156949.svg';
            break;
          case 'Requests':
            iconSource =
              'https://image.flaticon.com/icons/svg/1790/1790008.svg';
            break;
          default:
            iconSource = 'https://image.flaticon.com/icons/svg/813/813322.svg';
        }
        return (
          <TabBottomIcon
            iconSource={iconSource}
            focused={focused}
            routeName={routeName}
          />
        );
      },
    }),

    tabBarOptions: {
      showLabel: false,
    },
  },
);
