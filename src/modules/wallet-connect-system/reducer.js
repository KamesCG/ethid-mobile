import dot from 'dot-prop-immutable-chain';
import {
  SET_NAVIGATION,
  INIT_REQUEST,
  INIT_SUCCESS,
  INIT_FAILURE,
  CALL_REQUEST,
  CALL_SUCCESS,
  CALL_FAILURE,
} from './actions/types';

const reducerActions = (state, action) => {
  switch (action.type) {
    case SET_NAVIGATION:
      return dot(state)
        .set('navigation', action.payload)
        .value();
    case INIT_REQUEST:
      return dot(state)
        .set('store.init', [...state.store.init, action])
        .value();
    case INIT_SUCCESS:
      return dot(state)
        .set('connections', action.payload)
        .set('store.init', [])
        .value();
    case INIT_FAILURE:
      return dot(state)
        .set('store.inits', [])
        .value();
    case CALL_REQUEST:
      return dot(state)
        .set('store.calls', [...state.store.calls, action.payload])
        .value();
    case CALL_SUCCESS:
      return dot(state)
        .set('store.calls', [])
        .value();
    case CALL_FAILURE:
      return dot(state)
        .set('store.calls', [])
        .value();

    default:
      throw new Error(`No Reducer Type Set: ${action.type}`);
  }
};

export default reducerActions;
