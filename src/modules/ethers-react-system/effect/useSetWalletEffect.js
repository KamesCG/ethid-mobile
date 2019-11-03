/**
 * @function useSetWalletEffect
 * @description Watch Browser window object for Etheruem selected address.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Component --- */
const useSetWalletEffect = (state, dispatch) => {
  const [isWalletReady, setWalletReady] = useState()

  useEffect(() => {
    if (state.address) {
      const runEffect = async () => {
        try {
          const provider = await ethers.providers.Web3Provider(window.web3.currentProvider);
          const wallet = provider.getSigner()
          dispatch({
            type: 'SET_WALLET_SUCCESS',
            payload: wallet
          })
          setWalletReady(true)
        } catch (error) {
          dispatch({
            type: 'SET_WALLET_FAILURE',
            payload: error
          })
          setWalletReady(false)
        }
      }
      runEffect();
    }

  }, [state.address])

  return isWalletReady
}

/* --- Export --- */
export default useSetWalletEffect