/**
 * @function useSignMessageEffect
 * @description Watch Browser window object for Etheruem selected address.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Component --- */
const useSignMessageEffect = (state, dispatch) => {
  const [isRequested, setRequested] = useState()
  const [isResponse, setResponse] = useState()

  useEffect(() => {
    if (state.provider && state.wallet && state.store.messages && state.store.messages.length > 0) {
      const runEffect = async () => {
        const messageRequest = state.store.messages[0]
        try {
          let signature
          switch (messageRequest.type) {
            // Signed Typed Data
            case 'SIGN_TYPED_MESSAGE_REQUEST':
              signature = await state.provider.injected.send(
                'eth_signTypedData',
                [
                  messageRequest.payload,
                  state.address
                ],
              );
              setRequested(true)
              break;
            // Normal Signed Data
            default:
              signature = await state.wallet.signMessage(messageRequest.payload)
              break;
          }
          if (signature) {
            dispatch({
              type: 'SIGN_MESSAGE_SUCCESS',
              id: messageRequest.id,
              payload: signature
            })
            setResponse(true)
          }
        } catch (error) {
          dispatch({
            type: 'SIGN_MESSAGE_FAILURE',
            id: messageRequest.id,
            payload: error
          })
          setResponse(false)
        }
      }
      runEffect();
    }
  }, [state.store.messages, state.provider, state.wallet])

  return {
    requested: isRequested,
    response: isResponse
  }
}

/* --- Export --- */
export default useSignMessageEffect