/**
 * @name EthersContext
 * @description Initialize Ethers contenxt.
 */

import {createContext} from 'react';
import {ethers} from 'ethers';

/**
 * @typedef Context @memberof React.Context
 * @property {Object} instance
 * @property {Object} store
 * @property {Object} contracts
 * @property {Object} library
 * @property {Array} deployed
 * @property {Object} signatures
 * @property {String} address
 * @property {String} addressShortened
 * @property {String} addressTrimmed
 * @property {String} wallet
 * @property {Function} enable
 * @property {Function} loadContractIntoLibrary
 * @property {Function} initContract
 * @property {Function} initContractFromLibrary
 * @property {Function} deployContract
 * @property {Function} deployContractFromBytecode
 * @property {Function} setProvider
 * @property {Function} setProviderStatus
 * @property {Function} signMessage
 * @property {Function} signMessageTyped
 *
 * @example // value can be consumed via Context.Consumer
 * <Context.Provider value={...}>
 *    <MyApp />
 * </Context.Provider>
 * ...
 * <Context.Consumer>
 *  {value => ...}
 * </Context.Consumer>
 */
const Context = createContext({
  instance: ethers,
  store: {
    contracts: [],
    deploy: [],
    messages: [],
    library: [],
    transactions: [],
    wallets: [],
  },
  contracts: {},
  library: {},
  deployed: [],
  signatures: {},
  address: undefined,
  addressShortened: undefined,
  addressTrimmed: undefined,
  wallet: undefined,
  enable: () => {},
  loadContractIntoLibrary: () => {},
  initContract: () => {},
  initContractFromLibrary: () => {},
  deployContract: () => {},
  deployContractFromBytecode: () => {},
  setProvider: () => {},
  setProviderStatus: () => {},
  signMessage: () => {},
  signMessageTyped: () => {},
  sendTransaction: () => {},
});

export default Context;
