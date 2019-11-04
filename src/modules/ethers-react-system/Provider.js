import React, {useContext, useReducer, useEffect} from 'react';
import Context from './Context';
import reducers from './reducer';
import ProviderEffects from './effects';
import {useCreateWalletEffect, useWalletLoadFromStorage} from './effect';
import * as actions from './actions';

const Provider = ({children, ...props}) => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducers, initialState);
  console.log(state, 'Ethers State');

  ProviderEffects(useEffect, state, dispatch);
  useWalletLoadFromStorage(state, dispatch);
  // useCreateWalletEffect(state, dispatch);

  return (
    <Context.Provider
      value={{
        ...state,
        dispatch,
        ...actions,
      }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
