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

  class PantallaFinal extends React.Component {
    render() {
        return (
        <div className="fondo-app">
          <div className="pantalla-final flex">
            <div className="pantalla-final__contenedor flex">
              <MaterialIcon icon="verified_user"/> 
              <p>Muchas gracias, tu solicitud fue generada</p>
            </div>
            <BotonEnviar />
          </div>
        </div>
        );
    }
  }
      
    function BotonEnviar() {
      let history = useHistory();
    
      function handleClick() {    
        history.push("/main");
      }
    
      return (
        <button type="button" className="boton-general flex shadow" onClick={handleClick}>
          Volver al inicio
        </button>
      );
    }      
export default PantallaFinal;