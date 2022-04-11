import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import { Container } from './styles'
import formatCurrency from '../../utils/formatCurrency'
import api from '../../services/api'

import { Header, Banner, Cards } from '../../components'

export function International (international) {
  const [packs, setPacks] = useState([])

  useEffect(() => {
    async function loadPacks () {
      const { data: allPacks } = await api.get('international')

      console.log(allPacks)

      const newProducts = allPacks.map(international => {
        return {
          ...international,
          formatedPrice: formatCurrency(international.price)
        }
      })

      setPacks(newProducts)
    }

    loadPacks()
  }, [])

  return (
    <Container>
      <Header />
      <Banner />
      <Cards key={international.id} international={international} />
    </Container>
  )
}

Cards.propTypes = {
  international: PropTypes.object
}
