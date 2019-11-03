/**
 * @function useDeployContractEffect
 * @description Deploy Ethereum Smart Contract
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { ethers } from 'ethers'
import { useState, useEffect } from "react";

/* --- Component --- */
const useDeployContractEffect = (state, dispatch) => {
  const [isRequested, setRequested] = useState()
  const [isResponse, setResponse] = useState()

  useEffect(() => {
    if (state.wallet && state.store.deploy && state.store.deploy.length > 0) {
      const runEffect = async () => {
        const request = state.store.deploy[0]
        let contract, deployed, transaction
        const { payload } = request
        try {
          contract = new ethers.ContractFactory(payload.contract.abi, payload.contract.bytecode, wallet)
          transaction = contract.getDeployTransaction(...payload.values)
          deployed = await wallet.sendTransaction(transaction);
          dispatch({
            type: 'DEPLOY_CONTRACT_SUCCESS',
            id: request.id,
            delta: request.id,
            payload: deployed
          })
        } catch (error) {
          dispatch({
            type: 'DEPLOY_CONTRACT_FAILURE',
            delta: request.id,
            payload: error
          })
        }
      }
      runEffect();
    }
  }, [state.store.deploy])

  return {
    requested: isRequested,
    response: isResponse
  }
}

/* --- Export --- */
export default useDeployContractEffect