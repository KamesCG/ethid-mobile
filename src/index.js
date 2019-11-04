import React from 'react';
import {compose, lifecycle} from 'recompose';
import {Platform, UIManager} from 'react-native';
import Navigator from '@navigation';

const AppView = () => {
  return <Navigator onNavigationStateChange={() => {}} uriPrefix="/app" />;
};

export default compose(
  lifecycle({
    UNSAFE_componentWillMount() {
      if (Platform.OS === 'android') {
        // eslint-disable-next-line no-unused-expressions
        UIManager.setLayoutAnimationEnabledExperimental &&
          UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    },
  }),
)(AppView);
