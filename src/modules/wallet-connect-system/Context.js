/**
 * @name IDWalletContext
 * @description Initialize Identity Wallet context.
 */

import {createContext} from 'react';

/**
 * @typedef Context @memberof React.Context
 * @property {Object} instance
 * @property {Object} store
 * @property {String} address
 * @property {String} addressShortened
 * @property {String} addressTrimmed
 * @property {String} wallet
 * @property {Function} enable
 * @property {Function} get3IDProvider
 * @property {Function} signClaim
 *
 */
const Context = createContext({
  address: undefined,
  addressShortened: undefined,
  addressTrimmed: undefined,
  navigation: undefined,
  wallet: undefined,
  store: {
    init: [],
    calls: [],
    messages: [],
    transactions: [],
    signatures: [],
  },
  getProvider: () => {},
  signClaim: () => {},
  initConnection: () => {},
  // setNavigation: () => {},
});

export default Context;
