import React from 'react'
 
import { useNavigate } from 'react-router-dom'

import { Container } from './styles'

function Home () {
  const navigate = useNavigate()

  function redirectInternational() {
    navigate('/internacionais')
  }

  function redirectNational () {
    navigate('/nacionais')
  }

  return (
    <Container>
      <section class='first-card'>
        <h1> O que você está buscando? </h1>
        <button onClick={redirectInternational} > Internacionais </button>
        <button onClick={redirectNational}> Nacionais</button>

      </section>
    </Container>
  )
}

export default Home
