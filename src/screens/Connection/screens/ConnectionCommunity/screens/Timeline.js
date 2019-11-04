import React from 'react';
import {View} from 'react-native';
import {VerificationCategory} from '@components';

export default () => (
  <View style={styles.container}>
    <VerificationCategory
      title="ConsenSys Tinkerers"
      subtitle="The buidlers of ConsenSys"
      image="https://image.flaticon.com/icons/svg/1055/1055685.svg"
    />
    <VerificationCategory
      title="Ethereum Developers"
      subtitle="Network of ETH developers and projects"
      image="https://image.flaticon.com/icons/svg/1403/1403241.svg"
    />
    <VerificationCategory
      title="DID Mafia"
      subtitle="The DID'oers"
      image="https://image.flaticon.com/icons/svg/1256/1256684.svg"
    />
  </View>
);

const styles = {
  title: {fontSize: 22, marginBottom: 10},
  container: {padding: 20},
};
