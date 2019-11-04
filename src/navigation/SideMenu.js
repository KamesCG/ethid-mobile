import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {DrawerActions} from 'react-navigation-drawer';
import {
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Avatar from '@atomic/atoms/Avatar';
import Flex from '@atomic/atoms/Flex';

class SideMenu extends Component {
  navigateToScreen = (route, subRoute) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      action: NavigationActions.navigate({
        routeName: subRoute,
      }),
    });
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    this.props.navigation.dispatch(navigateAction);
  };

  auth = [
    {
      label: 'Profile',
      screen: 'Profile',
      subroute: 'Identity',
    },
    {
      label: 'Manage',
      screen: 'Profile',
      subroute: 'Updates',
    },
    {
      label: 'Requests',
      screen: 'Profile',
      subroute: 'Requests',
    },
  ];

  connections = [
    {
      label: 'Friends',
      screen: 'ConnectionPeer',
      subroute: 'Connection',
    },
    {
      label: 'Community',
      screen: 'ConnectionCommunity',
      subRoute: 'ConnectionCommunity',
    },
    {
      label: 'Applications',
      screen: 'ConnectionApplication',
      subroute: 'ConnectionApplication',
    },
  ];

  storage = [
    {
      label: 'Public',
      screen: 'Connections',
    },
    {
      label: 'Private',
      screen: 'Connections',
    },
  ];

  communications = [
    {
      label: 'Comments',
      screen: 'Connections',
    },
    {
      label: 'Ghost Chat',
      screen: 'Connections',
    },
  ];

  render() {
    return (
      <View style={styles.container}>
        <Flex style={styles.header}>
          <Text style={styles.logo}>ΞID</Text>
          <Avatar
            source={{uri: 'https://imgur.com/PNKaT0K.png'}}
            dimensions={'52px'}
          />
        </Flex>
        <ScrollView>
          <NavigationSection
            label="Decentralized Identity"
            navigateToScreen={this.navigateToScreen}
            items={this.auth}
          />
          <NavigationSection
            label="Connections"
            route="Connection"
            navigateToScreen={this.navigateToScreen}
            items={this.connections}
          />
          <NavigationSection
            label="Storage"
            route="Storage"
            navigateToScreen={this.navigateToScreen}
            items={this.storage}
          />
          <NavigationSection
            label="Communication"
            route="Communication"
            navigateToScreen={this.navigateToScreen}
            items={this.communications}
          />
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={[styles.small, styles.white]}>MIT License</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object,
};

const NavigationSection = props => {
  return (
    <View>
      <TouchableOpacity onPress={props.navigateToScreen(props.route)}>
        <Text style={styles.sectionHeadingStyle}>{props.label}</Text>
      </TouchableOpacity>
      <View style={styles.navSectionStyle}>
        {props.items.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.navItemStyle}
            onPress={props.navigateToScreen(item.screen, item.subroute)}>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  sectionHeadingStyle: {
    backgroundColor: '#f0f0f0',
    borderBottomColor: '#d9e9fa',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  navSectionStyle: {
    backgroundColor: '#f0f0f0',
  },
  navItemStyle: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    padding: 10,
    paddingLeft: 20,
  },
  label: {
    fontSize: 12,
  },
  header: {
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#1152d4',
  },
  logo: {
    color: '#FFF',
    fontSize: 26,
  },
  white: {
    color: '#FFF',
  },
  small: {
    fontSize: 10,
  },
  footerContainer: {
    padding: 20,
    backgroundColor: '#306dc2',
    color: '#FFF',
  },
};

export default SideMenu;
