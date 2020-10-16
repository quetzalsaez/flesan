import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
  materiales: [],
  filtro: ''
}

const estadoAppSlice = createSlice({
  name: 'estadoApp',
  initialState,
  reducers: {
      materialAdded(state, action) {
          state.materiales.push(action.payload)
      },
      materialDeleted(state, action) {   
        state.materiales = state.materiales.filter(material => material.id !== action.payload.materialId)        
      },
      materialUpdated(state, action) {
        const { id,  cant, comentario, destino} = action.payload
        const materialExistente = state.materiales.find(material => material.id === id)
        if (materialExistente) {          
          materialExistente.cant = cant          
          materialExistente.destino = destino
          materialExistente.comentario = comentario
        }
      },
      tokenSave(state, action) {
        state.token = action.payload
      },
      filtroAdded(state, action) {
        state.filtro = action.payload
      },
      filtroClean(state) {
        state.filtro = ''
      },
  }
})

export const { materialAdded, materialDeleted, materialUpdated, tokenSave, filtroAdded, filtroClean } = estadoAppSlice.actions

export default estadoAppSlice.reducer