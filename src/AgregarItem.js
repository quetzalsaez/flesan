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

class AgregarItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {buscarValue: '', buscando: false};    
    this.handleChange = this.handleChange.bind(this);
    /* this.handleSubmit = this.handleSubmit.bind(this); */
  }  

  handleChange(event) {
    this.setState({ buscarValue: event.target.value });     
    if (event.target.value) {
      this.setState({buscando: true});
    } else {
      this.setState({buscando: false});
    }
  }

  render() {
      return (
      <div className="fondo-app">
        <div className="fondo-app__app-bar flex">
            <BackButton />
            <p className="t-center">Agregar item</p>
        </div>
        <div className="agregar-item flex">        
          
          <div className="agregar-item__contenedor shadow flex flex-column">
            <div className="agregar-item__contenedor__barra-buscar flex">
              <div className="flex">
                <MaterialIcon icon="search"/>  
                <input className='agregar-item__contenedor__barra-buscar__input' name='buscarValor' type="text" value={this.state.buscarValue} placeholder='Buscar' onChange={this.handleChange} />
              </div>
              <button><MaterialIcon icon="tune"/>  </button>              
            </div>
            <ItemsList buscando={this.state.buscando} />    
          </div>           

          <BotonEnviar />
        </div>
      </div>
      );
  }
}

function ItemsList(props) {
  const estaBusando = props.buscando;
  if (estaBusando) {
    return <MostrarItems />
  } else {
    return <OcultarItems />
  }
}
function MostrarItems() {
  return (
    <div>
      <div className="item">
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
              Cant. disponible
            </div>
            <div className="item__elementos__contenido">
              324 paquete
            </div>
          </div>
          <div className="item__elementos__elemento">
            <div className="item__elementos__titulo">
              Cant. disponible
            </div>
            <div className="item__elementos__contenido">
              324 paquete
            </div>
          </div>
        </div>
      </div>
      <div className="item">
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
              Cant. disponible
            </div>
            <div className="item__elementos__contenido">
              324 paquete
            </div>
          </div>
          <div className="item__elementos__elemento">
            <div className="item__elementos__titulo">
              Cant. disponible
            </div>
            <div className="item__elementos__contenido">
              324 paquete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function OcultarItems() {
  return (
    <div className="agregar-item__contenedor__vacio">
      <p>Ingresa una descripción en la búsqueda para encontrar items</p>
    </div>
  );
}

function BackButton() {
    let history = useHistory();
  
    function handleClick() {      
      history.push("/generarSolicitud");
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

  function Otro() {
    let history = useHistory();
  
    function handleClick() {    
      /* history.push("/generarSolicitud"); */
    }
  
    return (
      <button type="button" className="generar-solicitud__lista-items__agregar-item flex shadow" onClick={handleClick}>
        <p>Agregar item</p>
        <MaterialIcon icon="add"/>  
      </button>
    );
  }

export default AgregarItem;