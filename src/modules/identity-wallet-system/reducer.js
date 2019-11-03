import dot from 'dot-prop-immutable-chain';
import {
  GET_3ID_PROVIDER_REQUEST,
  AUTHENTICATE_REQUEST,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILURE,
  SIGN_CLAIM_REQUEST,
  SIGN_CLAIM_SUCCESS,
  SIGN_CLAIM_FAILURE,
  SET_WALLET_SUCCESS,
} from './actions/types';

const reducerActions = (state, action) => {
  switch (action.type) {
    case GET_3ID_PROVIDER_REQUEST:
      return dot(state)
        .set(`store.signatures`, [...state.store.signatures, action])
        .value();
    case AUTHENTICATE_REQUEST:
      return dot(state)
        .set(`store.authenticate`, [...state.store.authenticate, action])
        .value();
    case AUTHENTICATE_SUCCESS:
      return dot(state)
        .set(`store.authenticate`, [...state.store.authenticate, action])
        .value();
    case AUTHENTICATE_FAILURE:
      return dot(state)
        .set(`store.authenticate`, [...state.store.authenticate, action])
        .value();
    case SET_WALLET_SUCCESS:
      return dot(state)
        .set(`wallet`, action)
        .value();

    /* ----------------------- */
    /* Sign Claims
    /* ----------------------- */
    case SIGN_CLAIM_REQUEST:
      return dot(state)
        .set(`store.signatures`, [...state.store.signatures, action])
        .value();
    case SIGN_CLAIM_SUCCESS:
      return dot(state)
        .set(`store.signatures`, [...state.store.signatures, action])
        .value();
    case SIGN_CLAIM_FAILURE:
      return dot(state)
        .set(`store.signatures`, [...state.store.signatures, action])
        .value();

    default:
      throw new Error(`No Reducer Type Set: ${action.type}`);
  }
};

export default reducerActions;
