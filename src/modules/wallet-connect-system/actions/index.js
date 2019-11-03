import {INIT_REQUEST, SET_NAVIGATION} from './types';
/**
 *
 * @param {Object} provider
 */
export const initConnection = (payload, dispatch) => {
  dispatch({
    type: INIT_REQUEST,
    payload,
  });
};
/**
 *
 * @param {Object} provider
 */
export const setNavigation = (payload, dispatch) => {
  dispatch({
    type: SET_NAVIGATION,
    payload,
  });
};
