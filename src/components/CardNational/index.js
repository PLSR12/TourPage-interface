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

export function CardNational ({ national }) {
  return (
    <Container>
      <ContainerItems>
        <Image src={national.url} alt='foto do produto' />
        <div>
          <PackName> {national.name}</PackName>
          <PackDescription>{national.description}</PackDescription>
          <PackPrice> a partir de {national.formatedPrice}</PackPrice>
          <Button>Cotar já</Button>
        </div>
      </ContainerItems>
    </Container>
  )
}

CardNational.propTypes = {
  national: PropTypes.object
}
