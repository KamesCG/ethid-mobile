import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {colors} from '@styles';

const Card = ({item, ...props}) => {
  const navigateHandler = () =>
    props.navigation.navigate({
      routeName: 'AdventureRetrieve',
      params: {...item},
    });
  return (
    <TouchableOpacity
      key={item.id}
      style={styles.itemTwoContainer}
      onPress={navigateHandler}>
      <View style={styles.item}>
        <SvgUri width="32" height="32" uri={item.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  item: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginVertical: 5,
    shadowColor: 'rgba(0,0,0,1.3)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    padding: 10,
  },
  content: {
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
  },
});
