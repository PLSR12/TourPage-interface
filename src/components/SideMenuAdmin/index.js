import React from 'react'
import PropTypes from 'prop-types'

import { Container, ItemContainer, ListLink } from './styles'
import listLinks from './menu-list'

export function SideMenuAdmin ({path}) {
  return (
    <Container>
      <hr></hr>
      {listLinks.map(item => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className='icon' />
          <ListLink to={item.link}>{item.label} </ListLink>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
      </ItemContainer>
    </Container>
  )
}


SideMenuAdmin.propTypes = {
    path: PropTypes.string
}
