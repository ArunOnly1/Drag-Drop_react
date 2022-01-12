import { createSlice } from '@reduxjs/toolkit'

const boardSlice = createSlice({
  name: 'board',
  initialState: {
    board: [],
  },
  reducers: {
    addToBoard: (state, action) => {
      state.board = [...state.board, action.payload]
    },
    filterBoard: (state, action) => {
      state.board = state.board.filter((b) => b.id !== action.payload)
    },
  },
})

export const { addToBoard, filterBoard } = boardSlice.actions
export default boardSlice.reducer
