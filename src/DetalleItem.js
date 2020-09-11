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
  import Modal from 'react-bootstrap/Modal'
  import ModalDialog from 'react-bootstrap/ModalDialog'
  import ModalHeader from 'react-bootstrap/ModalHeader'
  import ModalBody from 'react-bootstrap/ModalBody'
  import Button from 'react-bootstrap/Button'

  class DetalleItem extends React.Component {
    render() {
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
                <input className="shadow" type="text" placeholder="Cant. Solicitada"/>
                <input className="shadow" type="text" placeholder="Destino"/>
                <input className="shadow" type="text" placeholder="Comentario"/>
              </div>
            </div>            
            <BotonEnviar />
          </div>
        </div>
        );
    }
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
  
    function BotonEnviar() {
      let history = useHistory();
    
      function handleClick() {    
        history.push("/generarSolicitud");
      }
    
      return (
        <button type="button" className="boton-general flex shadow" onClick={handleClick}>
          Agregar
        </button>
      );
    }      
export default DetalleItem;