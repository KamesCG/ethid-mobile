import React from 'react'
import styled from '@emotion/native'
import dot from 'dot-prop-immutable'
import { variants } from '@styles'

const reducer = (acc, v) => ({...acc, ...dot.get(variants, v)})

const constructVariant = selects => 
selects
? [{}, ...selects].reduce(reducer)
: {}

const Image = styled.Image``
export default props => {
  return React.createElement(Image, {...props, style: constructVariant(props.variants) })
}