import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  PackName,
  Image,
  PackPrice,
  PackDescription,
  Button
} from './styles'

export function Cards ({ international }) {
  return (
    <Container>
      <Container>
        <Image src={international.url} alt='foto do produto' />
        <div>
          <PackName> {international.name} </PackName>
          <PackDescription> {international.description} </PackDescription>
          <PackPrice> {international.price}</PackPrice>
          <Button>Cotar já</Button>
        </div>
      </Container>
      <div></div>
    </Container>
  )
}


Cards.propTypes = {
  international: PropTypes.object
}
