import React from 'react';
import {withNavigation} from 'react-navigation';
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
};

const ButtonLinked = ({onPress, ...props}) => {
  const navigateHandler = () =>
    props.navigation.navigate({
      routeName: props.to,
    });
  return (
    <TouchableOpacity onPress={navigateHandler}>
      <Button {...props} style={props.sx} />
    </TouchableOpacity>
  );
};

export default withNavigation(ButtonLinked);
