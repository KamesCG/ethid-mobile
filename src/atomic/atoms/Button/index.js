import React from 'react';
import styled from '@emotion/native';
import {TouchableOpacity} from 'react-native';

const Button = styled.View`
  background: ${props => props.background};
`;

Button.defaultProps = {
  background: '#FFF',
  borderRadius: 10,
  paddingVertical: 8,
  paddingHorizontal: 20,
  textAlign: 'center',
};

export default ({onPress, ...props}) => (
  <TouchableOpacity onPress={onPress}>
    <Button {...props} style={props.sx} />
  </TouchableOpacity>
);
