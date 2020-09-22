import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  /* { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' } */
]

const materialesSlice = createSlice({
  name: 'materiales',
  initialState,
  reducers: {
      materialAdded(state, action) {
          state.push(action.payload)
      }
  }
})

export const { materialAdded } = materialesSlice.actions

export default materialesSlice.reducer