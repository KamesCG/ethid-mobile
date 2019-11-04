/**
 * @function useWalletCallEffect
 * @description Initialize WalletConnect
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import {NavigationContext} from 'react-navigation';
import {useState, useContext, useEffect} from 'react';

/* --- Component --- */
export const useWalletCallEffect = (state, dispatch) => {
  const [ready, setReady] = useState();

  useEffect(() => {
    if (state.store.calls && state.store.calls.length > 0) {
      const runEffect = async () => {
        const request = state.store.calls[0];
        try {
          state.navigation.navigate({
            routeName: 'WalletRequests',
            params: request,
          });
          dispatch({
            type: 'CALL_SUCCESS',
          });
        } catch (error) {
          console.log(error);
          dispatch({
            type: 'CALL_FAILURE',
            payload: error,
          });
        }
      };
      runEffect();
    }
  }, [state.store.calls, dispatch, state.navigation]);

  return ready;
};
