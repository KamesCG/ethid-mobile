import React from 'react'
import styled, { css } from '@emotion/native'
 
const View = styled.View`
  shadowColor: rgba(0,0,0,0.3),
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.20,
  shadowRadius: 1.41,
  border-radius: 7px;
  background-color: #FFF;
  padding: 7px;
`

View.defaultProps = {
  style: {
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    
    elevation: 1,
  }
}
export default View