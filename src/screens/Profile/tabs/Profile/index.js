import React from 'react';
import {View} from 'react-native';
import {useState, useContext, useEffect} from 'react';
import {NavigationContext} from 'react-navigation';

import {ProfileHeader} from 'molecules';
import {VerificationCategory, RadioGroup} from '@components';

export default props => {
  console.log(
    props.navigation
      .dangerouslyGetParent()
      .dangerouslyGetParent()
      .dangerouslyGetParent(),
    'profffile',
  );
  const navigation = useContext(NavigationContext);
  console.log(navigation, 'navigationnavigation');
  return (
    <View style={{}}>
      <ProfileHeader
        name={{
          first: 'Kames',
          last: 'Geraghty',
        }}
        details={{
          occupation: 'Javascript Developer',
          employer: 'ConsenSys',
        }}
      />
      <View style={{padding: 20}}>
        <View
          style={{backgroundColor: '#FFF', borderRadius: 5, marginTop: -35}}>
          <RadioGroup
            items={['Connections', 'Profile', 'Web3']}
            selectedIndex={0}
            onChange={() => {}}
          />
        </View>
        <View style={{paddingVertical: 20}}>
          <VerificationCategory
            title="Peer-to-Peer"
            to="Connection"
            subtitle="Manage connections to friends"
            image="https://image.flaticon.com/icons/svg/2065/2065157.svg"
          />
          <VerificationCategory
            title="Peer-to-Community"
            to="ConnectionCommunity"
            subtitle="Manage connections to communities"
            image="https://image.flaticon.com/icons/svg/745/745205.svg"
          />
          <VerificationCategory
            title="Application"
            to="ConnectionApplication"
            subtitle="Manage connections to applications"
            image="https://image.flaticon.com/icons/svg/1146/1146849.svg"
          />
        </View>
      </View>
    </View>
  );
};
