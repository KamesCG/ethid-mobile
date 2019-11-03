import React from 'react';
import {compose, withState} from 'recompose';
import {FlatList} from 'react-native';
import {colors} from '@styles';
import {Card} from '@components';

import GridView from './view';
import {badgeData, listData} from './sample';

const Badges = props => {
  return (
    <FlatList
      keyExtractor={item =>
        item.id ? `${props.tabIndex}-${item.id}` : `${item[0] && item[0].id}`
      }
      style={{backgroundColor: colors.white, paddingHorizontal: 15}}
      data={badgeData}
      renderItem={Card}
    />
  );
};

const Quests = props => {
  return (
    <FlatList
      keyExtractor={item =>
        item.id ? `${props.tabIndex}-${item.id}` : `${item[0] && item[0].id}`
      }
      style={{backgroundColor: colors.white, paddingHorizontal: 15}}
      data={listData}
      renderItem={Card}
    />
  );
};

export default compose(
  withState('tabIndex', 'setTabIndex', 0),
  withState('tabs', 'setTabs', ['Badges', 'Quests']),
  withState('panels', 'setPanels', [<Badges />, <Quests />]),
  withState('data', 'setData', listData),
  withState('badges', 'setBadges', badgeData),
)(GridView);
