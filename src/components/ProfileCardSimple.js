import React from 'react';
import {withNavigation} from 'react-navigation';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '@styles';
import Avatar from '@atomic/atoms/Avatar';

const avatar = {
  uri: 'https://imgur.com/PNKaT0K.png',
};

const Card = ({item, ...props}) => {
  const navigateHandler = () =>
    props.navigation.navigate({
      routeName: props.to,
      params: {...item},
    });
  return (
    <TouchableOpacity style={styles.itemTwoContainer} onPress={navigateHandler}>
      <View style={styles.item}>
        {/* <SvgUri width="32" height="32" uri={props.image} /> */}
        <View style={styles.avatar}>
          <Avatar source={{uri: props.image}} dimensions={'52px'} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.role}>{props.role}</Text>
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(Card);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  item: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.11)',
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginVertical: 5,
    padding: 10,

    shadowColor: 'rgba(0,0,0,1.3)',
    shadowOffset: {
      width: 20,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1.25,
  },
  content: {
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  role: {
    fontSize: 10,
  },
  subtitle: {
    fontSize: 13,
  },
});
