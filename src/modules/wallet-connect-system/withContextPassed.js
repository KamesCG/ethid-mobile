import React from 'react';
import Context from './Context';

const WithContextPassed = ({children}) => (
  <Context.Consumer>
    {walletConnect => (
      <>
        {children && Array.isArray(children)
          ? children.map(child => React.cloneElement(child, {walletConnect}))
          : React.cloneElement(children, {walletConnect})}
      </>
    )}
  </Context.Consumer>
);

export default WithContextPassed;
