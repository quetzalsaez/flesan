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


class GenerarSolicitud extends React.Component {
  render() {
      return (
      <div className="fondo-app">
        <div className="fondo-app__app-bar flex">
            <BackButton />
            <p className="t-center">Generando solicitud</p>
        </div>
        <div className="generar-solicitud flex">
          <div className="generar-solicitud__persona-retiro shadow flex">
            <MaterialIcon icon="person"/>  
            <p>Persona retiro</p>
          </div>
          
          <div className="generar-solicitud__lista-items shadow flex flex-column">
            <BotonAgregarItem />
          </div>           

          <BotonEnviar />
        </div>
      </div>
      );
  }
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
      /* history.push("/generarSolicitud"); */
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
      <button type="button" className="generar-solicitud__lista-items__agregar-item flex shadow" onClick={handleClick}>
        <p>Agregar item</p>
        <MaterialIcon icon="add"/>  
      </button>
    );
  }

export default GenerarSolicitud;