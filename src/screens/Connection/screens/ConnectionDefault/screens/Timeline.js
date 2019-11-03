import React from 'react';
import {View, Text} from 'react-native';
import {ProfileCardSimple} from '@components';

export default () => (
  <View style={styles.container}>
    <ProfileCardSimple
      title="BuidlBot"
      subtitle="#BuidlsAllDay"
      role="#BuidlsAllDay"
      image="https://imgur.com/3GMEDR8.png"
    />
  </View>
);

const styles = {
  title: {fontSize: 22, marginBottom: 10},
  container: {padding: 20},
};
