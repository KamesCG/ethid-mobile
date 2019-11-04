import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native';
import {colors} from '@styles';
import {badgeData, listData} from './sample';
import Update from '../../../../components/Update';

export default props => (
  <>
    <View style={{paddingVertical: 10}}>{props.panels[0]}</View>
    <FlatList
      keyExtractor={item =>
        item.id ? `${props.tabIndex}-${item.id}` : `${item[0] && item[0].id}`
      }
      style={{backgroundColor: colors.white, paddingHorizontal: 15}}
      data={badgeData}
      renderItem={Update}
    />
  </>
);
