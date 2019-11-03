import React from 'react';
import {View} from 'react-native';
import {VerificationCategory} from '@components';

export default () => (
  <View style={styles.container}>
    <VerificationCategory
      title="MakerDAI"
      subtitle="Monitoring the DAI Supply/Vote"
      image="https://image.flaticon.com/icons/svg/138/138281.svg"
    />
    <VerificationCategory
      title="Esence"
      subtitle="Notebook and Story Publication"
      image="https://image.flaticon.com/icons/svg/1102/1102457.svg"
    />
  </View>
);

const styles = {
  title: {fontSize: 22, marginBottom: 10},
  container: {padding: 20},
};
