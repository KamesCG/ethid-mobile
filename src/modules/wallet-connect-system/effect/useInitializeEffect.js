/**
 * @function useInitializeEffect
 * @description Initialize WalletConnect
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import RNWalletConnect from '@walletconnect/react-native';
import {useState, useEffect} from 'react';

import {sessionRequestListener} from '../listeners/sessionRequestListener';
import {callRequestListener} from '../listeners/callRequestListener';

/* --- Component --- */
export const useInitializeEffect = (state, dispatch) => {
  const [ready, setReady] = useState();

  useEffect(() => {
    if (state.store.init && state.store.init.length > 0) {
      const runEffect = async () => {
        const request = state.store.init[0];
        try {
          const walletConnector = new RNWalletConnect(
            {
              uri: request.payload.data,
            },
            {
              clientMeta: {
                description: 'WalletConnect Demo App',
                url: 'https://walletconnect.org',
                icons: ['https://walletconnect.org/walletconnect-logo.png'],
                name: 'WalletConnect',
                ssl: false,
              },
            },
          );
          global.wc = walletConnector;
          sessionRequestListener(global.wc, dispatch);
          callRequestListener(global.wc, dispatch);
          console.log(walletConnector, 'walletConnectorwalletConnector');
          dispatch({
            type: 'INIT_SUCCESS',
            payload: global.wc,
          });
        } catch (error) {
          console.log(error);
          dispatch({
            type: 'INIT_FAILURE',
            payload: error,
          });
        }
      };
      runEffect();
    }
  }, [state.store.init, dispatch]);

  return ready;
};
