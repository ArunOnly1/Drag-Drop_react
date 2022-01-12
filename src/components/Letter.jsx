import React from 'react'
import styled from 'styled-components'
import { useDrag } from 'react-dnd'
import { Typography } from '@mui/material'

const Letter = ({ id, value }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'letter',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  return <BetterTypo ref={drag}>{value}</BetterTypo>
}

export default Letter

const BetterTypo = styled(Typography)`
  padding: 0.5rem;
  border-radius: 10px;
  min-width: 2rem;
  border: 1px solid green;

  &:hover {
    cursor: pointer;
  }
`
