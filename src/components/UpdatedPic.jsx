import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { filterBoard } from '../redux/slices/boardSlice'
const UpdatedPic = ({ url, id }) => {
  const dispatch = useDispatch()
  const handleClose = (id) => {
    dispatch(filterBoard(id))
  }
  return (
    <div>
      <Button onClick={() => handleClose(id)}>-</Button>
      <BetterImage src={url} alt='dragdrop' />
    </div>
  )
}

export default UpdatedPic

const BetterImage = styled.img`
  height: 150px;
  width: 150px;
  padding: 1rem;
  position: relative;
`
