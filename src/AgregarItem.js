import React, { useState, useEffect } from 'react';
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
  import {serviciosFlesan} from './api/servicios'
  import { useSelector, useDispatch } from 'react-redux'
  import { CircularProgress } from '@material-ui/core';
  import { filtroAdded, filtroClean } from './features/estadoApp/estadoAppSlice';

function AgregarItem() {  
  const [buscarValue, setBuscarValue] = useState('')
  const [buscando, setBuscando] = useState(false)
  const [itemsEncontrados, setItemsEncontrados] = useState('')
  const [categorias, setCategorias] = useState([])
  const token = useSelector(state => state.estadoApp.token)

  const dispatch = useDispatch()

  useEffect(() => {
    getItems()
    dispatch(
      filtroClean()
    )    
  }, [])

  var getItems= async () => {
    var servicios = new serviciosFlesan(); 
    var respuesta = await servicios.getItems(token);     
    setBuscando(true)
    setItemsEncontrados(respuesta.data)         
  }

  const handleChange = async event => {    
    var servicios = new serviciosFlesan();        
    setBuscarValue(event.target.value)
    /* if (buscarValue.length > 2) {
      var respuesta = await servicios.getItems(buscarValue, token); 
      setBuscando(true)
      setItemsEncontrados(respuesta.data)
      console.log(respuesta.data)
    } else {
      setBuscando(false)
    } */
    /* if (event.target.value) {
      setBuscando(true)
    } else {
      setBuscando(false)
    } */
  }

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
              <input className='agregar-item__contenedor__barra-buscar__input' name='buscarValor' type="text" value={buscarValue} placeholder='Buscar' onChange={handleChange} />
            </div>
            <Filtros items={categorias} />              
          </div>
          <ItemsList items={itemsEncontrados} buscando={buscando} />    
        </div>                     
      </div>        
    </div>
    );
}

function Filtros(props) {
  const [show, setShow] = useState(false);
  const [categorias, setCategorias] = useState('');
  const token = useSelector(state => state.estadoApp.token)    
  const categoriaSeleccionada = useSelector(state => state.estadoApp.filtro)
  
  const dispatch = useDispatch()  

  const handleClose = ((groupName)=> {
    if (groupName != null) {
      if (groupName != categoriaSeleccionada.groupName) {
        dispatch(
          filtroAdded({ 
            groupName           
          })
        )
      } else {
        dispatch(
          filtroClean()
        )
      }
    }
    setShow(false)
  })

  const handleShow = () => setShow(true);    

  useEffect(() => {
    getCategorias()
  }, [])

  var getCategorias= async () => {
    var servicios = new serviciosFlesan(); 
    var respuesta = await servicios.getCategorias(token);  
    setCategorias(respuesta.data)      
    console.log(categoriaSeleccionada)     
  }

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
            {categorias ? categorias.sort((a, b) => a.GroupName.localeCompare(b.GroupName)).map((data, index) => (                
              <button key={index} className={'shadow ' + (categoriaSeleccionada.groupName == data.GroupName ? 'fondo-naranjo' : '')} onClick={() => handleClose(data.GroupName)}>{data.GroupName}</button>
            )) : <div className="flex circularProgress"><CircularProgress color="inherit" size="90px" thickness="2.0" /></div>}          
          </div>
        </Modal.Body>        
      </Modal>
    </>
  );
}

function ItemsList(props) {
  const filtroCategoria = useSelector(state => state.estadoApp.filtro)
  console.log(filtroCategoria)
  const estaBusando = props.buscando;         
  const materiales = props.items ? (filtroCategoria != '' ? props.items.filter(itemName => itemName.GroupName.toUpperCase() == filtroCategoria.groupName.toUpperCase()).sort((a, b) => a.ItemName.localeCompare(b.ItemName)).map((data, index) => (    
    <BotonItemLista data={data} />
  )) : props.items.sort((a, b) => a.ItemName.localeCompare(b.ItemName)).map((data, index) => (    
    <BotonItemLista data={data} />
  ))) : null;

  if (estaBusando) {    
    return <div>
      {materiales}
    </div>
  } else {
    return <div className="flex circularProgress"><CircularProgress color="inherit" size="90px" thickness="2.0" /></div>
  }
}



function BotonItemLista(props) {
  let history = useHistory();
  console.log('data')
  console.log(props.data)
  function handleClick() {    
    history.push({
      pathname: "/detalleItem",
      state: { item: props.data }
    });
  }

  return (
    <button className="item-main flex shadow" onClick={handleClick}>
      <div className="item__titulo">
        <p className="item__nombre">
          {props.data.ItemName}
        </p>
      </div>
      <div className="item__info-flecha flex">
        <div className="item__contenedor-elementos">          
          <div className="item__elementos flex">
            <div className="item__elementos__elemento">
              <div className="item__elementos__titulo">
                Cant. disponible
              </div>
              <div className="item__elementos__contenido">
              {props.data.QuantityOnStock}
              </div>
            </div>            
            <div className="item__elementos__elemento">
              <div className="item__elementos__titulo">
                Grupo
              </div>
              <div className="item__elementos__contenido">
              {props.data.GroupName}
              </div>
            </div>
          </div>
        </div>
        <MaterialIcon icon="keyboard_arrow_right"/>
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