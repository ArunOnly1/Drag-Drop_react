import React from 'react'
import styled from 'styled-components'
import { useDrag } from 'react-dnd'
import { Button } from '@mui/material'

const Picture = ({ id, url }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  return (
    <BetterImage
      ref={drag}
      src={url}
      alt='dragdrop'
      style={{ border: isDragging ? '3px solid green' : '0' }}
    />
  )
}

export default Picture

const BetterImage = styled.img`
  height: 150px;
  width: 150px;
  padding: 1rem;
`
