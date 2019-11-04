import styled from '@emotion/native';

const Avatar = styled.Image`
  border-radius: 99999px;
  width: ${props => props.dimensions || '60px'};
  height: ${props => props.dimensions || '60px'};
`;
export default Avatar;
