import React from 'react'

import { Container  } from './styles'

import Monte from '../../assets/monte-roraima.jpg'

export function Banner () {
  return (
    <Container>
      <div style={{backgroundImage: `url(${Monte})`}}>
        <h1>A viagem dos seus sonhos começa aqui!</h1>
      </div>
    </Container>
  )
}
