import React from 'react'

import { Container  } from './styles'

import Monte from '../../assets/aviao.jpg'

export function Banner () {
  return (
    <Container>
      <div style={{backgroundImage: `url(${Monte})`}}>
      </div>
    </Container>
  )
}
