/**
 * @function useSetWalletEffect
 * @description Watch Browser window object for Etheruem selected address.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
// import Box from '3box';
import {useState, useEffect} from 'react';

const getConsent = data => {};

/* --- Component --- */
export const useCreateWalletEffect = (state, dispatch) => {
  const [isWalletReady, setWalletReady] = useState();

  useEffect(() => {
    if (!state.wallet) {
      const runEffect = async () => {
        console.log(state, 'hello world');
        const seed =
          '0x5905f5563b4b6728940470173678ded052bbebf71a2b3457024dfad3be33e91e';
        const idWallet = new state.static(getConsent, {seed});

        const provider = idWallet.get3idProvider();
        // const box = await Box.openBox(null, provider);
        // box
        dispatch({
          type: 'SET_WALLET_SUCCESS',
          payload: idWallet,
        });
      };
      runEffect();
    }
  }, [state.wallet]);

  return isWalletReady;
};
