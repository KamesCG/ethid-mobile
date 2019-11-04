import React from 'react';
import Context from './Context';

const WithContextPassed = ({children}) => (
  <Context.Consumer>
    {ethers => (
      <>
        {children && Array.isArray(children)
          ? children.map(child => React.cloneElement(child, {ethers}))
          : React.cloneElement(children, {ethers})}
      </>
    )}
  </Context.Consumer>
);

export default WithContextPassed;
