import {ethers} from 'ethers';
import {isAddress} from './utilities';

const effects = (callUseEffect, state, dispatch) => {
  /**
   * @function EthereumEnable
   */
  callUseEffect(() => {
    // window.ethereum.enable()
  }, [state.enable]);

  /**
   * @function ProviderMonitor
   */
  callUseEffect(() => {
    if (window.web3 && window.web3.currentProvider) {
      dispatch({
        type: 'SET_PROVIDER',
        payload: {
          injected: window.web3.currentProvider,
          mainnet: ethers.getDefaultProvider(),
          rinkeby: ethers.getDefaultProvider('rinkeby'),
        },
      });
    } else {
      dispatch({
        type: 'SET_PROVIDER_STATUS',
        payload: undefined,
      });
    }
  }, [window.web3 && window.web3.currentProvider]);

  /**
   * @function SetAddress
   */
  callUseEffect(() => {
    const address = window.ethereum && window.ethereum.selectedAddress;
    if (address) {
      try {
        dispatch({
          type: 'SET_ADDRESS',
          input: address,
        });
      } catch (error) {
        dispatch({
          type: 'SET_ADDRESS_FAILURE',
          input: error,
        });
      }
    }
  }, [window.ethereum && window.ethereum.selectedAddress]);

  /**
   * @function SetWallet
   */
  callUseEffect(() => {
    if (state.address) {
      const runEffect = async () => {
        try {
          const provider = await networkRouting('metamask');
          const wallet = provider.getSigner();
          dispatch({
            type: 'SET_WALLET_SUCCESS',
            payload: wallet,
          });
        } catch (error) {
          dispatch({
            type: 'SET_WALLET_FAILURE',
            payload: error,
          });
        }
      };
      runEffect();
    }
  }, [state.address]);

  /**
   * @function SignMessage
   * @description SIGN_MESSAGE_REQUEST
   */
  callUseEffect(() => {
    if (
      state.provider &&
      state.wallet &&
      state.store.messages &&
      state.store.messages.length > 0
    ) {
      const runEffect = async () => {
        const messageRequest = state.store.messages[0];
        try {
          let signature;
          switch (messageRequest.type) {
            case 'SIGN_TYPED_MESSAGE_REQUEST':
              signature = await state.provider.injected.send(
                'eth_signTypedData',
                [messageRequest.payload, state.address],
              );
              break;
            default:
              signature = await state.wallet.signMessage(
                messageRequest.payload,
              );
              break;
          }
          if (signature) {
            dispatch({
              type: 'SIGN_MESSAGE_SUCCESS',
              id: messageRequest.id,
              payload: messageRequest.payload,
              signature,
            });
          }
        } catch (error) {
          console.log(error);
          dispatch({
            type: 'SIGN_MESSAGE_FAILURE',
            input: {
              id: messageRequest.id,
              error,
            },
          });
        }
      };
      runEffect();
    }
  }, [state.store.messages, state.provider, state.wallet]);

  /**
   * @function DeployContract
   * @description SIGN_MESSAGE_REQUEST
   */
  callUseEffect(() => {
    if (state.store.deploy && state.store.deploy.length > 0) {
      const runEffect = async () => {
        let contract, deployed, transaction;
        const request = state.store.deploy[0];
        const {payload} = request;
        try {
          const wallet = state.wallet;
          if (wallet) {
            contract = new ethers.ContractFactory(
              payload.contract.abi,
              payload.contract.bytecode,
              wallet,
            );
            transaction = contract.getDeployTransaction(...payload.values);
            deployed = await wallet.sendTransaction(transaction);
            dispatch({
              type: 'DEPLOY_CONTRACT_SUCCESS',
              id: request.id,
              delta: request.id,
              payload: deployed,
            });
          }
        } catch (error) {
          console.log(error);
        }
      };
      runEffect();
    }
  }, [state.store.deploy]);

  /**
   * @function LoadContract
   * @description LOAD_CONTRACT_INTO_LIBRARY_REQUEST
   */
  callUseEffect(() => {
    if (state.store.library && state.store.library.length > 0) {
      const request = state.store.library[0];

      if (isAddress(request.address)) {
        dispatch({
          type: 'LOAD_CONTRACT_INTO_LIBRARY_SUCCESS',
          id: request.id,
          payload: request.payload,
        });
      } else {
        dispatch({
          type: 'LOAD_CONTRACT_INTO_LIBRARY_FAILURE',
          id: request.id,
          payload: 'Invalid smart contract address.',
        });
      }
    }
  }, [state.wallet, state.store.contracts]);
};

export default effects;

/**
 * @func networkRouting
 * @desc Select network provider.
 * @param {Object} network
 * @return {Object} provider
 */
export const networkRouting = async network => {
  switch (network) {
    case 'json':
      return window.ethers.providers.json;
    case 'test':
      return window.ethers.providers.test;
    case 'infura':
      return window.ethers.providers.infura;
    case 'metamask':
      return new ethers.providers.Web3Provider(window.web3.currentProvider);
    default:
      return ethers.getDefaultProvider('rinkeby');
  }
};
