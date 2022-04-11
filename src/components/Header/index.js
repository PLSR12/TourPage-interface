import React from 'react'

import { Menu, Logo } from './styles'

import LogoImg from '../../assets/Logo.png'

export function Header () {

  return (
    <Menu>
      <Logo src={LogoImg} alt='logo' />
    </Menu>
  )
}
