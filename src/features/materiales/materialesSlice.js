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
      },
      materialDeleted(state, action) {        
        return state.filter(material => material.id !== action.payload.materialId)
      },
      materialUpdated(state, action) {
        const { id,  cant, comentario, destino} = action.payload
        const materialExistente = state.find(material => material.id === id)
        if (materialExistente) {          
          materialExistente.cant = cant          
          materialExistente.destino = destino
          materialExistente.comentario = comentario
        }
      }
  }
})

export const { materialAdded, materialDeleted, materialUpdated } = materialesSlice.actions

export default materialesSlice.reducer