import React, {useEffect} from 'react';
import {WalletConnectInject} from './index';
const SetNavigation = props => {
  console.log(props, 'setttt navv');
  useEffect(() => {
    if (props.navigation) {
      console.log('setting navigatio');
      props.walletConnect.setNavigation(props.navigation);
    }
  }, [props.navigation]);
  return null;
};

export default props => (
  <WalletConnectInject>
    <SetNavigation navigation={props.navigation} />
  </WalletConnectInject>
);
