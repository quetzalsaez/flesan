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
              <Filtros />              
            </div>
            <ItemsList buscando={this.state.buscando} />    
          </div>                     
        </div>        
      </div>
      );
  }
}

function Filtros() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>      
      <button onClick={handleShow}>
        <MaterialIcon icon="tune"/>
      </button>

      <Modal className="agregar-item__filtros" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <MaterialIcon icon="search"/>  
          <input className='agregar-item__filtros__input' name='buscarValor' type="text" /* value={this.state.buscarValue} */ placeholder='Buscar' /* onChange={this.handleChange} */ />
        </Modal.Header>
        <Modal.Body>
          <div className="agregar-item__filtros__categorias flex">
            <button className="shadow" onClick={handleClose}>Acero</button>
            <button className="shadow" onClick={handleClose}>Alambre</button>
            <button className="shadow" onClick={handleClose}>Azulejos</button>
            <button className="shadow" onClick={handleClose}>Cemento</button>
            <button className="shadow" onClick={handleClose}>Acero</button>
            <button className="shadow" onClick={handleClose}>Alambre</button>
            <button className="shadow" onClick={handleClose}>Azulejos</button>
            <button className="shadow" onClick={handleClose}>Cemento</button>
            <button className="shadow" onClick={handleClose}>Acero</button>
            <button className="shadow" onClick={handleClose}>Alambre</button>
            <button className="shadow" onClick={handleClose}>Azulejos</button>
            <button className="shadow" onClick={handleClose}>Cemento</button>
            <button className="shadow" onClick={handleClose}>Acero</button>
            <button className="shadow" onClick={handleClose}>Alambre</button>
            <button className="shadow" onClick={handleClose}>Azulejos</button>
            <button className="shadow" onClick={handleClose}>Cemento</button>            
          </div>
        </Modal.Body>        
      </Modal>
    </>
  );
}

function ItemsList(props) {
  const estaBusando = props.buscando;
  if (estaBusando) {
    return <MostrarItems />
  } else {
    return <OcultarItems />
  }
}

function BotonItemLista() {
  let history = useHistory();

  function handleClick() {    
    history.push("/detalleItem");
  }

  return (
    <button className="item flex" onClick={handleClick}>
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
        <MaterialIcon icon="keyboard_arrow_right"/>
      </button>
  );
}

function MostrarItems() {
  return (
    <div>
      <BotonItemLista />
      <BotonItemLista />
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