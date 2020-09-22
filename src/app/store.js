import { configureStore } from '@reduxjs/toolkit'

import materialesReducer from '../features/materiales/materialesSlice'

export default configureStore({
  reducer: {
    materiales: materialesReducer
  }
})