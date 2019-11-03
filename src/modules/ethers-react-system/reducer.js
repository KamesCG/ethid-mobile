import dot from 'dot-prop-immutable-chain';
import {hashCode} from './utilities';
import {
  SET_PROVIDER,
  SET_PROVIDER_STATUS,
  SIGN_TYPED_MESSAGE_REQUEST,
  SIGN_MESSAGE_REQUEST,
  INIT_CONTRACT_REQUEST,
  DEPLOY_CONTRACT_REQUEST,
  DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST,
  LOAD_CONTRACT_INTO_LIBRARY_REQUEST,
} from './actions/types';

const reducerActions = (state, action) => {
  let filtered;
  const {input, delta, id, payload, type} = action;
  switch (action.type) {
    case SET_PROVIDER:
      return {
        ...state,
        provider: payload,
      };
    case SET_PROVIDER_STATUS:
      return {
        ...state,
        providerStatus: payload,
      };
    case 'SET_WALLET_LOAD_FROM_STORAGE':
      return {
        ...state,
        wallet: action.payload,
      };
    case 'SET_ADDRESS':
      return {
        ...state,
        address: input,
      };
    case 'SET_ADDRESS_FAILURE':
      return {
        ...state,
        address: input,
      };
    case 'SET_WALLET_SUCCESS':
      return {
        ...state,
        wallet: payload,
      };
    case SIGN_TYPED_MESSAGE_REQUEST:
      return {
        ...state,
        store: {
          ...state.store,
          messages: [
            ...state.store.messages,
            {
              ...action,
            },
          ],
        },
      };
    case SIGN_MESSAGE_REQUEST:
      return {
        ...state,
        store: {
          ...state.store,
          messages: [
            ...state.store.messages,
            {
              ...action,
            },
          ],
        },
      };
    case 'SIGN_MESSAGE_SUCCESS':
      filtered = state.store.messages.filter(msg => msg.id !== action.id);
      return {
        ...state,
        store: {
          ...state.store,
          messages: filtered,
        },
        signatures: {
          ...state.signatures,
          [action.id]: {
            ...action,
          },
        },
      };
    case 'SIGN_MESSAGE_FAILURE':
      filtered = state.store.messages.filter(msg => msg.id !== action.id);
      return {
        ...state,
        store: {
          ...state.store,
          messages: [],
        },
        signatures: {
          ...state.signatures,
          [input.id]: {
            ...input,
            type: 'signature',
            status: false,
          },
        },
      };

    /* ----------------------- */
    /* Contract Loading     */
    /* ----------------------- */
    case LOAD_CONTRACT_INTO_LIBRARY_REQUEST:
      return dot(state)
        .set(`store.library`, [...state.store.library, action])
        .value();

    case 'LOAD_CONTRACT_INTO_LIBRARY_SUCCESS':
      return dot(state)
        .set(`library.${action.payload.contractName}`, action.payload)
        .value();

    case 'LOAD_CONTRACT_INTO_LIBRARY_FAILURE':
      return dot(state)
        .set(`store.library`, [])
        .value();
    /* ----------------------- */
    /* Contract Loading     */
    /* ----------------------- */
    case 'LOAD_CONTRACT_REQUEST':
      console.log(action, 'init contract');
      return dot(state)
        .set(`store.library`, [...state.store.contracts, action])
        .value();

    case 'LOAD_CONTRACT_SUCCESS':
      return dot(state)
        .set(`contracts.${action.payload.contractName}`, action.payload)
        .value();

    case 'LOAD_CONTRACT_FAILURE':
      return dot(state)
        .set(`store.contracts`, [])
        .value();
    /* ----------------------- */
    /* Contract Initialize     */
    /* ----------------------- */

    case INIT_CONTRACT_REQUEST:
      const {address, contract} = payload;
      return {
        ...state,
        store: {
          ...state.store,
          contracts: [],
        },
        contracts: {
          ...state.contracts,
          [id]: {
            id,
            address,
            ...contract,
          },
        },
      };

    /* ----------------------- */
    /* Contract Deployment     */
    /* ----------------------- */
    case DEPLOY_CONTRACT_REQUEST:
      return {
        ...state,
        store: {
          ...state.store,
          deploy: [
            ...state.store.deploy,
            {
              payload,
              type,
              id: delta || hashCode(payload),
              delta: delta || hashCode(payload),
            },
          ],
        },
      };
    case DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST:
      return {
        ...state,
        store: {
          ...state.store,
          deploy: [
            ...state.store.deploy,
            {
              payload,
              id: delta || hashCode(input),
            },
          ],
        },
      };
    case 'DEPLOY_CONTRACT_SUCCESS':
      filtered = state.store.messages.filter(msg => msg.id !== input.id);
      return {
        ...state,
        store: {
          ...state.store,
          deploy: filtered,
        },
        deployed: [
          ...state.deployed,
          {
            ...payload,
            type: 'contractDeployed',
            status: true,
          },
        ],
      };

    default:
      throw new Error(`No Reducer Type Set: ${action.type}`);
  }
};

export default reducerActions;
