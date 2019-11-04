import React, {useContext, useReducer} from 'react';
import Context from './Context';
import reducers from './reducer';
import {useInitializeEffect, useWalletCallEffect} from './effect';
import * as actions from './actions';

const Provider = ({children, ...props}) => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducers, initialState);
  console.log(state, 'Wallet Connect State');
  useInitializeEffect(state, dispatch);
  useWalletCallEffect(state, dispatch, props.navigate);
  return (
    <Context.Provider
      value={{
        ...state,
        dispatch,
        initConnection: payload => actions.initConnection(payload, dispatch),
        setNavigation: payload => actions.setNavigation(payload, dispatch),
      }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
