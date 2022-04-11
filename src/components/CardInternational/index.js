import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  ContainerItems,
  PackName,
  Image,
  PackPrice,
  PackDescription,
  Button
} from './styles'

export function CardInternational ({ international }) {
  return (
    <Container>
      <ContainerItems>
        <Image src={international.url} alt='foto do produto' />
        <div>
          <PackName> {international.name}</PackName>
          <PackDescription>{international.description}</PackDescription>
          <PackPrice> A partir de {international.formatedPrice}</PackPrice>
          <Button>Cotar já</Button>
        </div>
      </ContainerItems>
    </Container>
  )
}

CardInternational.propTypes = {
  international: PropTypes.object
}
