import React, {useContext, useReducer} from 'react';
import Context from './Context';
import reducers from './reducer';
import {useCreateWalletEffect} from './effect';
import * as actions from './actions';

const Provider = ({children, ...props}) => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducers, initialState);
  console.log(state, 'Identity Wallet State');

  useCreateWalletEffect(state, dispatch);

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
