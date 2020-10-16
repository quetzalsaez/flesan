import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBuilding, faHashtag } from '@fortawesome/free-solid-svg-icons'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    useHistory
  } from "react-router-dom";  
import AgregarItem from './AgregarItem';
import { useSelector, useDispatch } from 'react-redux'
import { materialDeleted } from './features/estadoApp/estadoAppSlice';


export const GenerarSolicitud = () => {    
  const materiales = useSelector(state => state.estadoApp.materiales)
  const estado = useSelector(state => state.estadoApp)
  console.log(materiales);

  const dispatch = useDispatch()
  let history = useHistory();

  const editarItem = (materialId) => {    
    history.push("/editarItem/" + materialId);    
  }

  const renderedmateriales = materiales.map(material => (
    <button className="item-main flex" onClick={() => editarItem(material.id)} key={material.id}>
      <div className="item__titulo">
        <p className="item__nombre">
          {material.itemData.ItemName}
        </p>
      </div>
      <div className="item__info-flecha flex">
        <div className="item__contenedor-elementos">        
          <div className="item__elementos flex">
            <div className="item__elementos__elemento">
              <div className="item__elementos__titulo">
                Cant. solicitada
              </div>
              <div className="item__elementos__contenido">
                {material.cant}
              </div>
            </div>
            {/* <div className="item__elementos__elemento">
              <div className="item__elementos__titulo">
                Código
              </div>
              <div className="item__elementos__contenido">
              {material.itemData.ItemCode}
              </div>
            </div> */}
            <div className="item__elementos__elemento">
              <div className="item__elementos__titulo">
                Grupo
              </div>
              <div className="item__elementos__contenido">
              {material.itemData.GroupName}
              </div>
            </div>
            {/* <div className="item__elementos__elemento">
              <div className="item__elementos__titulo">
                Destino
              </div>
              <div className="item__elementos__contenido">
                {material.destino}
              </div>
            </div>
            <div className="item__elementos__elemento">
              <div className="item__elementos__titulo">
                Comentario
              </div>
              <div className="item__elementos__contenido">
                {material.comentario}
              </div>
            </div> */}
          </div>
        </div>
        <MaterialIcon icon="keyboard_arrow_right"/>
      </div>
    </button>    
  ))

  return (
    <div className="fondo-app">
      <div className="fondo-app__app-bar flex">
          <BackButton />
          <p className="t-center">Generando solicitud</p>
      </div>
      <div className="generar-solicitud flex">
        {/* <div className="generar-solicitud__persona-retiro shadow flex">
          <MaterialIcon icon="person"/>  
          <p>Persona retiro</p>
        </div> */}
        <div className="generar-solicitud__persona-retiro">
          <p className="label-input">Persona retiro</p>
          <input className="shadow" type="text" placeholder="Ingresar una persona para el retiro"/>
          <p className="label-input">Destino</p>
          <input className="shadow" type="text" placeholder="Ingresar un lugar de destino"/>          
        </div>
        
        <div className="generar-solicitud__lista-items shadow">
          <BotonAgregarItem />
          {renderedmateriales}
        </div>           

        <BotonEnviar />
      </div>
    </div>
  )
}

function BackButton() {
    let history = useHistory();
  
    function handleClick() {      
      history.push("/main");
    }
  
    return (
      <button type="button" className="flex" onClick={handleClick}>
        <MaterialIcon icon="arrow_back"/>  
      </button>
    );
  }

  function BotonEnviar() {
    let history = useHistory();
  
    function handleClick() {    
      history.push("/pantallaFinal");
    }
  
    return (
      <button type="button" className="boton-general flex shadow" onClick={handleClick}>
        Enviar
      </button>
    );
  }

  function BotonAgregarItem() {
    let history = useHistory();
  
    function handleClick() {    
      history.push("/agregarItem");
    }
  
    return (
      <button type="button" className="generar-solicitud__lista-items__agregar-item flex shadow w100" onClick={handleClick}>
        <p>Agregar item</p>
        <MaterialIcon icon="add"/>  
      </button>
    );
  }

export default GenerarSolicitud;