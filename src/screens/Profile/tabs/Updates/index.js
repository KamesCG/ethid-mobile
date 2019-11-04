import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native';
import {colors} from '@styles';
import {data} from './sample';
import Update from '../../../../components/Update';

export default props => (
  <View style={styles.container}>
    <FlatList
      keyExtractor={item =>
        item.id ? `${props.tabIndex}-${item.id}` : `${item[0] && item[0].id}`
      }
      style={styles.list}
      data={data}
      renderItem={Update}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  list: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
});
