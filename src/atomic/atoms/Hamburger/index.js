import React from 'react';
import {TouchableOpacity, Menu, Text, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
export default ({navigation}) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => navigation.navigate({routeName: 'QRScanner'})}>
      <SvgUri
        style={styles.icon}
        width="18"
        height="18"
        uri="https://image.flaticon.com/icons/svg/1058/1058992.svg"
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={navigation.openDrawer}>
      <Text style={styles.label}>MENU</Text>
    </TouchableOpacity>
  </View>
);

const styles = {
  container: {
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10,
  },
  label: {
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
};
