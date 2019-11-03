/**
 * @function useSetWalletEffect
 * @description Watch Browser window object for Etheruem selected address.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import {ethers} from 'ethers';
import {useState, useEffect} from 'react';

/* --- Component --- */
export const useCreateWalletEffect = (state, dispatch) => {
  const [isWalletReady, setWalletReady] = useState();

  useEffect(() => {
    if (!state.wallet) {
      const runEffect = async () => {
        let wallet = ethers.Wallet.createRandom();
        console.log(wallet, 'walletwallet');
        dispatch({
          type: 'SET_WALLET_SUCCESS',
          payload: wallet,
        });
      };
      runEffect();
    }
  }, [state.wallet]);

  return isWalletReady;
};
