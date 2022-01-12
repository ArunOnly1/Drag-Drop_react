import React from 'react'
import styled from 'styled-components'
import { useDrop } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { addToBoard } from '../redux/slices/boardSlice'
import Letter from './Letter'
import UpdatedLetter from './UpdatedLetter'

const LetterList = [
  {
    id: 1,
    value: 'A',
  },
  {
    id: 2,
    value: 'B',
  },
  {
    id: 3,
    value: 'C',
  },
  {
    id: 4,
    value: 'E',
  },
  {
    id: 5,
    value: 'Z',
  },
  {
    id: 6,
    value: 'X',
  },
]
const DragDrop = () => {
  const dispatch = useDispatch()
  const { board } = useSelector((state) => state.board)
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'letter',
    drop: (item) => addLetterToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const addLetterToBoard = (id) => {
    const letter = LetterList.filter((p) => p.id === id)
    dispatch(addToBoard(letter[0]))
  }
  return (
    <MainContainer>
      <LetterListWrapper>
        {LetterList.map((letter) => {
          return <Letter key={letter.id} {...letter} />
        })}
      </LetterListWrapper>
      <BoardWrapper ref={drop}>
        {board.map((letter) => {
          return <UpdatedLetter {...letter} key={letter.id} />
        })}
      </BoardWrapper>
    </MainContainer>
  )
}

export default DragDrop

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`
const LetterListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid black;
  width: 100px;
`
const BoardWrapper = styled.div`
  min-height: 400px;
  width: 200px;

  border: 1px solid black;
`

const UpdatedPicWrapper = styled.div`
  height: 150px;
  width: 150px;
  padding: 1rem;
`
