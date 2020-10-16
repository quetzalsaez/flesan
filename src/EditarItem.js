import React, { useState, useEffect } from 'react';
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
  import { materialUpdated, materialDeleted } from './features/estadoApp/estadoAppSlice';
  import { nanoid } from '@reduxjs/toolkit'
  import Modal from 'react-bootstrap/Modal'
  import { useSelector } from 'react-redux'

  export const EditarItem = ({ match }) => {
    const { materialId } = match.params 

    const material = useSelector(state => 
      state.estadoApp.materiales.find(material => material.id === materialId)  
    )

    const [cant, setCant] = useState('')    
    const [comentario, setComentario] = useState('')
    const [mostrarModal, setMostrarModal] = useState(false)

    useEffect(() => {
      if (material) {
        setCant(material.cant)        
        setComentario(material.comentario)
      };
    }, []);

    const dispatch = useDispatch()

    const onCantChanged = e => setCant(e.target.value)    
    const onComentarioChanged = e => setComentario(e.target.value)

    let history = useHistory();
    
    const updateMaterial = () => {
      if (cant && comentario) {
        dispatch(
          materialUpdated({
              id: materialId,
              cant,              
              comentario
          })
        )    
        history.push("/generarSolicitud");    
      } else {
        setMostrarModal(true)  
      }   
    }

    const eliminarMaterial = () => {
      dispatch(
        materialDeleted({
            materialId        
        })
      )
      history.push("/generarSolicitud");
    }

    const enter = e => {    
      if (e.key === 'Enter' || e.keyCode == 13) {
        updateMaterial()      
      }              
    }

    const cerrarModal = () => {
      setMostrarModal(false) 
    }

    if (!material) {
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
            <ItemDetalle item={material} />
            <div className="detalle-item__contenedor__detalle__inputs">
              <p className="label-input">Cant. Solicitada</p>
              <input onKeyUp={enter} className="shadow" type="text" placeholder="Cant. Solicitada" value={cant} onChange={onCantChanged}/>              
              <p className="label-input">Comentario</p>
              <input onKeyUp={enter} className="shadow" type="text" placeholder="Comentario" value={comentario} onChange={onComentarioChanged}/>
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
        <ModalValidador mostrarModal={mostrarModal} onChangeMostrar={cerrarModal}/>
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
              {props.item.itemData.ItemName}
            </p>
          </div>
        <div className="item__info-flecha">
          <div className="item__contenedor-elementos">            
            <div className="item__elementos flex">
              <div className="item__elementos__elemento">
              <div className="item__elementos__titulo">
                Cant. disponible
              </div>
              <div className="item__elementos__contenido">
                {props.item.itemData.QuantityOnStock}
              </div>
              </div>
              <div className="item__elementos__elemento">
              <div className="item__elementos__titulo">
                Código
              </div>
              <div className="item__elementos__contenido">
                {props.item.itemData.ItemCode}
              </div>
              </div>
              <div className="item__elementos__elemento">
              <div className="item__elementos__titulo">
                  Grupo
              </div>
              <div className="item__elementos__contenido">
                {props.item.itemData.GroupName}  
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
                Asegúrate de rellenar todos los campos            
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
        history.push("/generarSolicitud");
      }
    
      return (
        <button type="button" className="flex shadow" onClick={handleClick}>
          <MaterialIcon icon="arrow_back"/>  
        </button>
      );
    }      

    export default EditarItem;