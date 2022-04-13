import React from 'react'
import PropTypes from 'prop-types'

import { Container, ContainerItems } from './styles'

import ListPacksNational from './ListPack'
import NewPacksNational from './NewPack'
import EditPacksNational from './EditPack'

import { SideMenuAdminNational } from '../../components'
import paths from '../../constants/paths'

export function AdminNational({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdminNational path={path} />
      <ContainerItems>
        {path === paths.PacksNational && <ListPacksNational />}
        {path === paths.NewPacksNational && <NewPacksNational />}
        {path === paths.EditPacksNational && <EditPacksNational/>}

      </ContainerItems>
    </Container>
  )
}

AdminNational.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
