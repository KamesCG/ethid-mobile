/**
 * @function useLoadContractIntoLibraryEffect
 * @description Load smart contract abi into applicaiton library to initialize for multiple addresses.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Component --- */
const useLoadContractIntoLibraryEffect = (state, dispatch) => {
  const [isLoadedIntoLibrary, setLoadedIntoLibrary] = useState()

  useEffect(() => {
    if (state.store.library && state.store.library.length > 0) {
      const request = state.store.library[0]
      dispatch({
        type: 'LOAD_CONTRACT_INTO_LIBRARY_SUCCESS',
        id: request.id,
        payload: request.payload
      })
      setLoadedIntoLibrary(true)
    }
  }, [state.wallet, state.store.contracts])

  return isLoadedIntoLibrary
}

/* --- Export --- */
export default useLoadContractIntoLibraryEffect