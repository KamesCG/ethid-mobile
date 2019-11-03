/**
 * @name IDWalletContext
 * @description Initialize Identity Wallet contenxt.
 */

import {createContext} from 'react';
import IdentityWallet from 'identity-wallet';

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
  static: IdentityWallet,
  store: {
    messages: [],
    transactions: [],
  },
  address: undefined,
  addressShortened: undefined,
  addressTrimmed: undefined,
  wallet: undefined,
  getProvider: () => {},
  signClaim: () => {},
});

export default Context;
