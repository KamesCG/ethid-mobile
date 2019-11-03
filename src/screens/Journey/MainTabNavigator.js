/* eslint-disable import/no-unresolved */
import React from 'react';
import { Image, View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import icons from '@icons'
import { colors } from '@styles';
import TabsBottomStyle from '@styles/TabsBottom'
import HomeScreen from './components/home/HomeViewContainer';
import Grids from './components/grids/GridsViewContainer';

const styles = TabsBottomStyle

export default createBottomTabNavigator(
  {
    Activity: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Activity',
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage}  />
            <Text style={styles.headerCaption}>Profile</Text>
          </View>
        ),
      },
    },
    Adventures: {
      screen: Grids,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage}  />
            <Text style={styles.headerCaption}>Adventures</Text>
          </View>
        ),
      },
    },
    Quests: {
      screen: Grids,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage}  />
            <Text style={styles.headerCaption}>Quests</Text>
          </View>
        ),
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Activity':
            iconSource = icons.swordShield;
            break;
          case 'Adventures':
            iconSource = icons.shield;
            break;
          case 'Quests':
            iconSource = icons.map;
            break;
          default:
            iconSource = icons.home;
        }
        return (
          <View style={styles.tabBarItemContainer}>
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: true,
      style: {
        backgroundColor: colors.white,
        borderTopWidth: 0.5,
        borderTopColor: '#d6d6d6',
        paddingVertical: 5,
      },
      labelStyle: {
        color: colors.grey,
      },
    },
  },
);
