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
  import { materialAdded } from './features/materiales/materialesSlice';
  import { nanoid } from '@reduxjs/toolkit'

  export const DetalleItem = () => {
    const [cant, setCant] = useState('')
    const [destino, setDestino] = useState('')
    const [comentario, setComentario] = useState('')

    const dispatch = useDispatch()

    const onCantChanged = e => setCant(e.target.value)
    const onDestinoChanged = e => setDestino(e.target.value)
    const onComentarioChanged = e => setComentario(e.target.value)

    let history = useHistory();
    
    const handleClick = () => {
      if (cant && destino && comentario) {
        dispatch(
          materialAdded({
              id: nanoid(),
              cant,
              destino,
              comentario
          })
        )
        setCant('')
        setDestino('')
        setComentario('')
      }
      history.push("/generarSolicitud");
    }

    return (
      <div className="fondo-app">
        <div className="fondo-app__app-bar flex">
            <BackButton />
            <p className="t-center">Detalle Item</p>
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
          <button type="button" className="boton-general flex shadow" onClick={handleClick}>
            Agregar
          </button>
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
        history.push("/agregarItem");
      }
    
      return (
        <button type="button" className="flex shadow" onClick={handleClick}>
          <MaterialIcon icon="arrow_back"/>  
        </button>
      );
    }      

    export default DetalleItem;