import React from 'react';
import styled from '@emotion/native';
import {colors} from '@styles';

const Button = styled.View`
  background-color: ${props => colors[props.bg] || colors.primary};
  color: #fff;
  border-radius: 4px;
  padding: 12px;
  text-align: center;
`;

const Text = styled.Text`
  color: #fff;
  text-align: center;
`;

export default ({sx, sxLabel, children, ...props}) => (
  <Button style={sx} {...props}>
    <Text style={sxLabel}>{children}</Text>
  </Button>
);
