import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import { Container, CardContainer } from './styles'
import formatCurrency from '../../utils/formatCurrency'
import api from '../../services/api'

import { Header, Banner, CardNational } from '../../components'

export function National (national) {
  const [packs, setPacks] = useState([])

  useEffect(() => {
    async function loadPacks () {
      const { data:allPacks } = await api.get('national')

      console.log(allPacks)

      const newPacks = allPacks.map(national => {
        return { ...national, formatedPrice: formatCurrency(national.price) }
      })

      setPacks(newPacks)
    }

    loadPacks()
  }, [])

  return (
    <Container>
      <Header />
      <Banner />
      <CardContainer>
      {packs.map(national =>(
          <CardNational key={national.id} national={national} />
       ))}      </CardContainer>
    </Container>
  )
}

CardNational.propTypes = {
  national: PropTypes.object
}
