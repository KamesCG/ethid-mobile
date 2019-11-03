/**
 *
 * @param {Object} provider
 */
export const getProvider = ({provider}, dispatch) =>
  dispatch({
    type: 'GET_3ID_PROVIDER',
    payload: provider,
  });

export const authenticate = ({spaces, options}, dispatch) =>
  dispatch({
    type: 'AUTHENTICATE_REQUEST',
    payload: {
      spaces,
      options,
    },
  });
export const signClaim = ({message}, dispatch) =>
  dispatch({
    type: 'SIGN_CLAIM_REQUEST',
    payload: message,
  });
