import React from 'react';
import {View} from 'react-native';

import {ProfileHeader} from 'molecules';

export default props => (
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
  </View>
);
