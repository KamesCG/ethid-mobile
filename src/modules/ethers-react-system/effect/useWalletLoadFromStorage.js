/**
 * @function useWalletLoadFromStorage
 * @description Load Wallet from Storage
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import {ethers} from 'ethers';
import {useState, useEffect} from 'react';
import key from 'src/key';

/* --- Component --- */
export const useWalletLoadFromStorage = (state, dispatch) => {
  const [ready, setWalletReady] = useState();

  useEffect(() => {
    if (!state.wallet) {
      const runEffect = async () => {
        let wallet = await ethers.Wallet.fromMnemonic(key.mnemonic);
        setWalletReady(true);
        dispatch({
          type: 'SET_WALLET_LOAD_FROM_STORAGE',
          payload: wallet,
        });
      };
      runEffect();
    }
  }, [state.wallet, dispatch]);

  return ready;
};
