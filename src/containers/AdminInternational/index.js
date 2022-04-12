import React from 'react'
import PropTypes from 'prop-types'

import { Container, ContainerItems } from './styles'

import ListPacks from './ListPack'
import NewPacks from './NewPack'
import EditPacks from './EditPack'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'

export function AdminInternational({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />
      <ContainerItems>
        {path === paths.Packs && <ListPacks />}
        {path === paths.NewPacks && <NewPacks />}
        {path === paths.EditPacks && <EditPacks/>}

      </ContainerItems>
    </Container>
  )
}

AdminInternational.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
