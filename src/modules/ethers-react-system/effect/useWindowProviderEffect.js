/**
 * @function useWindowProviderEffect
 * @description Watch the Browser ethereum object.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Component --- */
const useWindowProviderEffect = (state, dispatch) => {
  const [isProviderReady, setProviderReady] = useState()

  useEffect(() => {
    if (window.web3 && window.web3.currentProvider) {
      dispatch({
        type: 'SET_PROVIDER',
        payload: {
          injected: window.web3.currentProvider,
          mainnet: ethers.getDefaultProvider(), // Add toggle.
          gorli: ethers.getDefaultProvider('gorli'), // Add toggle.
          rinkeby: ethers.getDefaultProvider('rinkeby') // Add toggle.
        }
      })
      setProviderReady(true)
    } else {
      dispatch({
        type: 'SET_PROVIDER_STATUS',
        payload: undefined
      })
      setProviderReady(false)
    }
  }, [(window.web3 && window.web3.currentProvider)])

  return isProviderReady
}

/* --- Export --- */
export default useWindowProviderEffect