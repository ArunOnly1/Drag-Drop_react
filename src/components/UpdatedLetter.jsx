import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { filterBoard } from '../redux/slices/boardSlice'
import ClearSharpIcon from '@mui/icons-material/ClearSharp'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
const UpdatedLetter = ({ value, id }) => {
  const [fontSize, setFontSize] = useState(4)
  const dispatch = useDispatch()
  const handleClose = (id) => {
    dispatch(filterBoard(id))
  }
  return (
    <div>
      <MainContainer>
        <ButtonWrapper>
          <BetterButton
            color='success'
            fontSize='small'
            onClick={() => setFontSize(fontSize - 1 < 1 ? 1 : fontSize - 1)}
          >
            <AddIcon />
          </BetterButton>
          <Button
            onClick={() => setFontSize(fontSize + 1 > 7 ? 7 : fontSize + 1)}
          >
            <RemoveIcon />
          </Button>
          <Button onClick={() => handleClose(id)}>
            <ClearSharpIcon color='error' fontSize='small' />
          </Button>
        </ButtonWrapper>
        <Typography variant={`h${fontSize}`}>{value}</Typography>
      </MainContainer>
    </div>
  )
}

export default UpdatedLetter

const MainContainer = styled.div`
  background: aliceblue;
  padding: 0.5rem;
  position: relative;
  margin-bottom: 10px;
`
const BetterButton = styled(Button)`
  color: red;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
