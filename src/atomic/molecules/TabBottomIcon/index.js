/* --- Global --- */
import React from 'react';
import {View, Text} from 'react-native';
import {SvgUri} from 'react-native-svg';

/* --- Local --- */
import TabsBottomStyle from '@styles/TabsBottom';
const styles = {
  iconContainer: {
    backgroundColor: '#FFF',
    borderRadius: 9999,
    padding: 4,
  },
};
const TabBottomIcon = props => (
  <View
    style={[
      TabsBottomStyle.item,
      props.focused && TabsBottomStyle.itemFocused,
    ]}>
    <View style={styles.iconContainer}>
      <SvgUri width="22" height="22" uri={props.iconSource} />
    </View>
    <Text
      style={[
        TabsBottomStyle.label,
        props.focused && TabsBottomStyle.labelFocused,
      ]}>
      {props.routeName}
    </Text>
  </View>
);

export default TabBottomIcon;
