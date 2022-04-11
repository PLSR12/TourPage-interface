import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import { Container, CardContainer } from './styles'
import formatCurrency from '../../utils/formatCurrency'
import api from '../../services/api'

import { Header, Banner, CardInternational } from '../../components'

export function International (international) {
  const [packs, setPacks] = useState([])

  useEffect(() => {
    async function loadPacks () {
      const { data } = await api.get('international')

      console.log(data)

      setPacks(packs)
    }

    loadPacks()
  }, [])

  return (
    <Container>
      <Header />
      <Banner />
      <CardContainer>
        <CardInternational
          key={international.id}
          international={international}
        />
      </CardContainer>
    </Container>
  )
}

CardInternational.propTypes = {
  international: PropTypes.object
}
