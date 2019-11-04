import React from 'react'
import styled, { css } from '@emotion/native'
 
const View = styled.View`
  border-radius: 9999px;
  background-color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  width:  ${props => props.dimensions || '100px'};
  height:  ${props => props.dimensions || 'auto'};
`
export default View