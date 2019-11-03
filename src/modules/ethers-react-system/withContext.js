import React from 'react';
import Context from './Context';

const withContext = component => (
  <Context.Consumer>{component}</Context.Consumer>
);

export default withContext;
