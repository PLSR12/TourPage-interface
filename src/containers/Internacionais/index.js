import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import { Container, CardContainer } from './styles'
import formatCurrency from '../../utils/formatCurrency'
import api from '../../services/api'

import { Header, Banner, CardInternational } from '../../components'

export function International ({ location: { state } }) {
  const [packs, setPacks] = useState([])

  useEffect(() => {
    async function loadPacks () {
      const { data: allPacks } = await api.get('international')

      console.log(allPacks)

      const newPacks = allPacks.map(international => {
        return {
          ...international,
          formatedPrice: formatCurrency(international.price)
        }
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
        {packs.map(international => (
          <CardInternational
            key={international.id}
            international={international}
          />
        ))}
      </CardContainer>
    </Container>
  )
}

CardInternational.propTypes = {
  international: PropTypes.object
}
