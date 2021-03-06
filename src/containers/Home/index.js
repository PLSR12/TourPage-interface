import React from 'react'

import { useHistory } from 'react-router-dom'

import {
  Container,
  Title,
  ContainerItems,
  ContainerButtons,
  International,
  National
} from './styles'

import { Header } from '../../components'

export function Home () {
  const { push } = useHistory()

  function redirectInternational () {
    push('/internacionais')
  }

  function redirectNational () {
    push('/nacionais')
  }

  return (
    <Container>
      <Header />
      <ContainerItems>
        <Title> Qual é o seu destino hoje? </Title>
        <ContainerButtons>
          <International onClick={redirectInternational}>
            Internacional
          </International>
          <National onClick={redirectNational}>Nacional</National>
        </ContainerButtons>
      </ContainerItems>
    </Container>
  )
}
