import React, { useEffect, useState } from 'react';
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
import { materialAdded } from './features/estadoApp/estadoAppSlice';
import { nanoid } from '@reduxjs/toolkit'
import Modal from 'react-bootstrap/Modal'

export const DetalleItem = (props) => {
  const [cant, setCant] = useState('')  
  const [comentario, setComentario] = useState('')
  const [mostrarModal, setMostrarModal] = useState(false)
  const [mostrarModalCantidad, setMostrarModalCantidad] = useState(false)

  const dispatch = useDispatch()

  const onCantChanged = e => setCant(e.target.value)  
  const onComentarioChanged = e => setComentario(e.target.value)

  let history = useHistory();
  console.log(props.location.state.item.QuantityOnStock)
  
  const handleClick = () => {
    if (cant && comentario) {     
      if (props.location.state.item.QuantityOnStock < cant) {
        setMostrarModalCantidad(true)  
      } else {
        dispatch(
          materialAdded({
              id: nanoid(),
              cant,              
              comentario,
              itemData: props.location.state.item
          })
        )
        setCant('')        
        setComentario('')
        history.push("/generarSolicitud");
      }      
    } else {
      setMostrarModal(true)  
    }    
  }
  const cerrarModal = () => {
    setMostrarModal(false) 
  }

  const cerrarModalCantidad = () => {
    setMostrarModalCantidad(false) 
  }

  const enter = e => {    
    if (e.key === 'Enter' || e.keyCode == 13) {
      handleClick()      
    }              
  }

  return (
    <div className="fondo-app">
      <div className="fondo-app__app-bar flex">
          <BackButton />
          <p className="t-center">Detalle Item</p>
      </div>
      <div className="detalle-item__contenedor flex">                      
        <div className="detalle-item__contenedor__detalle">
          <ItemDetalle item={props.location.state.item} />
          <div className="detalle-item__contenedor__detalle__inputs">
            <p className="label-input">Cant. Solicitada</p>
            <input onKeyUp={enter} className="shadow" type="text" placeholder="Ingresar la cantidad deseada" value={cant} onChange={onCantChanged}/>            
            <p className="label-input">Comentario</p>
            <input onKeyUp={enter} className="shadow" type="text" placeholder="Agregar un comentario" value={comentario} onChange={onComentarioChanged}/>
          </div>
        </div>            
        <button type="button" className="boton-general flex shadow" onClick={handleClick}>
          Agregar
        </button>
      </div>
      <ModalValidador mostrarModal={mostrarModal} onChangeMostrar={cerrarModal}/>
      <ModalCantidad mostrarModal={mostrarModalCantidad} onChangeMostrar={cerrarModalCantidad}/>
    </div>    
  );
}  

function ItemDetalle(props) {
  let history = useHistory();

  function handleClick() {    
      history.push("/detalleItem");
  }

  return (
      <button className="item-main flex shadow" onClick={handleClick}>
        <div className="item__titulo">
          <p className="item__nombre">
            {props.item.ItemName}
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
                    {props.item.QuantityOnStock}
                </div>
                </div>
                <div className="item__elementos__elemento">
                <div className="item__elementos__titulo">
                    Código
                </div>
                <div className="item__elementos__contenido">
                {props.item.ItemCode}
                </div>
                </div>
                <div className="item__elementos__elemento">
                <div className="item__elementos__titulo">
                    Grupo
                </div>
                <div className="item__elementos__contenido">
                {props.item.GroupName}
                </div>
                </div>
            </div>
          </div> 
        </div>           
      </button>
  );
}

function ModalValidador(props) {
  const [show, setShow] = useState(props.mostrarModal);
  console.log(show.mostrarModal)

  useEffect(() => {
    setShow(props)
  }, [props])

  const handleClose = () => props.onChangeMostrar();
  const handleShow = () => setShow(true);

  return (
    <>           
      <Modal className="detalle-item__modal" show={show.mostrarModal} onHide={handleClose}>       
        <Modal.Body>
          <div className="detalle-item__modal-cuerpo flex flex-column">
            <div className="detalle-item__modal-contenido flex">
              Asegúrate de rellenar todos los datos      
            </div>
            <div className="contenedor-boton flex">
              <button type="button" className="boton-modal flex shadow" onClick={handleClose}>
                Ok
              </button>
            </div>
          </div>
        </Modal.Body>        
      </Modal>
    </>
  );
}

function ModalCantidad(props) {
  const [show, setShow] = useState(props.mostrarModal);
  console.log(show.mostrarModal)

  useEffect(() => {
    setShow(props)
  }, [props])

  const handleClose = () => props.onChangeMostrar();
  const handleShow = () => setShow(true);

  return (
    <>           
      <Modal className="detalle-item__modal" show={show.mostrarModal} onHide={handleClose}>       
        <Modal.Body>
          <div className="detalle-item__modal-cuerpo flex flex-column">
            <div className="detalle-item__modal-contenido flex">
              La cantidad seleccionada no puede ser mayor a la disponible
            </div>
            <div className="contenedor-boton flex">
              <button type="button" className="boton-modal flex shadow" onClick={handleClose}>
                Ok
              </button>
            </div>
          </div>
        </Modal.Body>        
      </Modal>
    </>
  );
}

function BackButton() {
    let history = useHistory();
  
    function handleClick() {      
      history.push("/agregarItem");
    }
  
    return (
      <button type="button" className="flex" onClick={handleClick}>
        <MaterialIcon icon="arrow_back"/>  
      </button>
    );
  }      

  export default DetalleItem;