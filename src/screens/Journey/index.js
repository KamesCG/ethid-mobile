import React from 'react';
import { Image,  TouchableOpacity, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import MainTabNavigator from './MainTabNavigator';
import { fonts, colors } from '@styles';

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
      navigationOptions: {
        title: '3ID',
        headerLeft: null
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      titleStyle: {
        fontFamily: fonts.primaryLight,
      },
      headerStyle: {
        backgroundColor: colors.white,
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        color: colors.primary,
        fontFamily: fonts.primaryRegular,
        fontSize: 15,
        fontWeight: '300'
      },
      headerTintColor: colors.primary,
      headerRight: <TouchableOpacity onPress={navigation.openDrawer}>
                    <Icon name='menu' size={20} style={{marginRight: 15}} color='black' />
                  </TouchableOpacity>,
      headerLeft: props => (
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            paddingLeft: 25,
          }}
        >
          <View>
            <Image
              source={require('../../../assets/images/icons/arrow-back.png')}
            />
          </View>
        </TouchableOpacity>
      ),
    }),
  },
);

export default createAppContainer(stackNavigator);
