import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import paths from '../../../constants/paths'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import {EditIconStyles } from './styles'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'

function ListPacksNational () {
  const [packs, setPacks] = useState([])
  const { push } = useHistory()

  useEffect(() => {
    async function loadPacks () {
      const { data } = await api.get('national')

      setPacks(data)
    }
    loadPacks()
  }, [])

  function editPacks (national) {
    push(paths.EditPacksNational, { national })
  }

  return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Destino</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            packs.map(national => (
              <TableRow
                key={national.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {national.name}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {national.description}
                </TableCell>
                <TableCell>{formatCurrency(national.price)}</TableCell>
                <TableCell>
                  <EditIconStyles onClick={() => editPacks(national)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default ListPacksNational
