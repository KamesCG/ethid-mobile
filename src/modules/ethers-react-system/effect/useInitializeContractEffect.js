/**
 * @function useInitializeContractEffect
 * @description Deploy Ethereum Smart Contract
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { ethers } from 'ethers'
import { useState, useEffect } from "react";

/* --- Component --- */
const useInitializeContractEffect = (state, dispatch) => {
  const [isInitialized, setInitialize] = useState()

  useEffect(() => {
    if (state.wallet && state.store.contracts && state.store.contracts.length > 0) {
      const runEffect = async () => {
        let contract
        const request = state.store.contracts[0]
        const { payload } = request
        try {
          const wallet = state.wallet
          contract = new ethers.Contract(payload.address, payload.abi, wallet)
          dispatch({
            type: 'INIT_CONTRACT_SUCCESS',
            delta: request.id,
            payload: contract,
            contractType: payload.contractType
          })
          setInitialize(true)
        } catch (error) {
          dispatch({
            type: 'INIT_CONTRACT_FAILURE',
            delta: request.id,
            payload: error
          })
          setInitialize(false)
        }
      }
      runEffect();
    }
  }, [state.wallet, state.store.contracts])

  return isInitialized
}

/* --- Export --- */
export default useInitializeContractEffect