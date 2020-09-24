import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBuilding, faHashtag } from '@fortawesome/free-solid-svg-icons'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    useHistory
  } from "react-router-dom";   
  import { useDispatch } from 'react-redux';
  import { materialUpdated, materialDeleted } from './features/materiales/materialesSlice';
  import { nanoid } from '@reduxjs/toolkit'
  import { useSelector } from 'react-redux'

  export const EditarItem = ({ match }) => {
    const { materialId } = match.params 

    const material = useSelector(state => 
      state.materiales.find(material => material.id === materialId)  
    )

    const [cant, setCant] = useState(material.cant)
    const [destino, setDestino] = useState(material.destino)
    const [comentario, setComentario] = useState(material.comentario)

    const dispatch = useDispatch()

    const onCantChanged = e => setCant(e.target.value)
    const onDestinoChanged = e => setDestino(e.target.value)
    const onComentarioChanged = e => setComentario(e.target.value)

    let history = useHistory();
    
    const updateMaterial = () => {
      if (cant && destino && comentario) {
        dispatch(
          materialUpdated({
              id: materialId,
              cant,
              destino,
              comentario
          })
        )        
      }
      history.push("/generarSolicitud");
    }

    const eliminarMaterial = () => {
      dispatch(
        materialDeleted({
            materialId        
        })
      )
      history.push("/generarSolicitud");
    }

    return (
      <div className="fondo-app">
        <div className="fondo-app__app-bar flex">
            <BackButton />
            <p className="t-center">Editar Item</p>
        </div>
        <div className="detalle-item__contenedor flex">                      
          <div className="detalle-item__contenedor__detalle">
            <ItemDetalle />
            <div className="detalle-item__contenedor__detalle__inputs">
              <input className="shadow" type="text" placeholder="Cant. Solicitada" value={cant} onChange={onCantChanged}/>
              <input className="shadow" type="text" placeholder="Destino" value={destino} onChange={onDestinoChanged}/>
              <input className="shadow" type="text" placeholder="Comentario" value={comentario} onChange={onComentarioChanged}/>
            </div>
          </div>                    
          <div>
            <button type="button" className="boton-general boton-general-eliminar flex shadow w100 mb5" onClick={eliminarMaterial}>
            <MaterialIcon icon="delete"/>Eliminar item
            </button>
            <button type="button" className="boton-general flex shadow w100 mb5" onClick={updateMaterial}>
              Guardar
            </button>
          </div>
        </div>
      </div>
      );
  }  
  
  function ItemDetalle() {
    let history = useHistory();

    function handleClick() {    
        history.push("/detalleItem");
    }

    return (
        <button className="item flex shadow" onClick={handleClick}>
        <div className="item__contenedor-elementos">
            <p className="item__nombre">
                PORCELANATO MURO RUSTICO 60x60 TIPO 5
            </p>
            <div className="item__elementos flex">
                <div className="item__elementos__elemento">
                <div className="item__elementos__titulo">
                    Cant. disponible
                </div>
                <div className="item__elementos__contenido">
                    324 paquete
                </div>
                </div>
                <div className="item__elementos__elemento">
                <div className="item__elementos__titulo">
                    Código
                </div>
                <div className="item__elementos__contenido">
                    248764
                </div>
                </div>
                <div className="item__elementos__elemento">
                <div className="item__elementos__titulo">
                    Grupo
                </div>
                <div className="item__elementos__contenido">
                    PISOS/TECHOS/REVEST.
                </div>
                </div>
            </div>
            </div>            
        </button>
    );
  }
  
  function BackButton() {
      let history = useHistory();
    
      function handleClick() {      
        history.push("/generarSolicitud");
      }
    
      return (
        <button type="button" className="flex shadow" onClick={handleClick}>
          <MaterialIcon icon="arrow_back"/>  
        </button>
      );
    }      

    export default EditarItem;