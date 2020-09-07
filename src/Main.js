import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBuilding, faHashtag } from '@fortawesome/free-solid-svg-icons'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import GenerarSolicitud from './GenerarSolicitud'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  useHistory
} from "react-router-dom";

class Main extends React.Component {    

  render() {
      return (
      <div className="fondo-app">
        <div className="home flex">
          <div className="home__centro-gestion shadow flex">
            <div className="home__centro-gestion__titulo flex">
              <FontAwesomeIcon icon={faBuilding} />
              <p>Paseo Colina</p>
            </div>
            <div className="home__centro-gestion__boton shadow">
              <p>Cambiar centro de gestion</p>
            </div>
          </div>
          
          <div className="home__solicitudes flex">
            <TabsSolicitudes /> 
          </div>           

          <BotonGenerarSolicitud />
        </div>
      </div>
      );
  }
}

function BotonGenerarSolicitud() {
  let history = useHistory();

  function handleClick() {    
    history.push("/generarSolicitud");
  }

  return (
    <button type="button" className="boton-general flex shadow" onClick={handleClick}>
      Crear solicitud
    </button>
  );
}

function TabsSolicitudes() {
  const [key, setKey] = useState('home');

  return (
    <Tabs      
      activeKey={key}
      onSelect={(k) => setKey(k)}>
      <Tab eventKey="home" title="Solicitudes actuales">
        <div className="home__solicitudes__contenido shadow">
          <div className="home__solicitudes__contenido__solicitud shadow flex">
            <div className="flex">
              <div className="home__solicitudes__contenido__solicitud__icono fondo-amarillo flex">
                <MaterialIcon icon="assignment"/>
              </div>
              <div className="home__solicitudes__contenido__solicitud__texto">
                <div className="flex"><MaterialIcon icon="today"/><p>12/03 - 12:30</p></div>
                <div className="flex"><FontAwesomeIcon icon={faHashtag} /><p>37456</p></div>
              </div>
            </div>
            <div className="home__solicitudes__contenido__solicitud__flecha flex">
              <MaterialIcon icon="chevron_right"/>
            </div>
          </div>
          <div className="home__solicitudes__contenido__solicitud shadow flex">
            <div className="flex">
              <div className="home__solicitudes__contenido__solicitud__icono fondo-verde flex">
                <MaterialIcon icon="assignment_turned_in"/>
              </div>
              <div className="home__solicitudes__contenido__solicitud__texto">
                <div className="flex"><MaterialIcon icon="today"/><p>12/03 - 12:30</p></div>
                <div className="flex"><FontAwesomeIcon icon={faHashtag} /><p>37456</p></div>
              </div>
            </div>
            <div className="home__solicitudes__contenido__solicitud__flecha flex">
              <MaterialIcon icon="chevron_right"/>
            </div>
          </div>
          <div className="home__solicitudes__contenido__solicitud shadow flex">
            <div className="flex">
              <div className="home__solicitudes__contenido__solicitud__icono fondo-rojo flex">
                <MaterialIcon icon="assignment_late"/>
              </div>
              <div className="home__solicitudes__contenido__solicitud__texto">
                <div className="flex"><MaterialIcon icon="today"/><p>12/03 - 12:30</p></div>
                <div className="flex"><FontAwesomeIcon icon={faHashtag} /><p>37456</p></div>
              </div>
            </div>
            <div className="home__solicitudes__contenido__solicitud__flecha flex">
              <MaterialIcon icon="chevron_right"/>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Solicitudes pasadas">
        <div className="home__solicitudes__contenido shadow">          
            <div className="home__solicitudes__contenido__solicitud solicitud-inactiva shadow flex">
              <div className="flex">
                <div className="home__solicitudes__contenido__solicitud__icono fondo-gris flex">
                  <MaterialIcon icon="assignment_turned_in"/>
                </div>
                <div className="home__solicitudes__contenido__solicitud__texto">
                  <div className="flex"><MaterialIcon icon="today"/><p>12/03 - 12:30</p></div>
                  <div className="flex"><FontAwesomeIcon icon={faHashtag} /><p>37456</p></div>
                </div>
              </div>
              <div className="home__solicitudes__contenido__solicitud__flecha flex">
                <MaterialIcon icon="chevron_right"/>
              </div>
            </div>
            <div className="home__solicitudes__contenido__solicitud shadow flex">
              <div className="flex">
                <div className="home__solicitudes__contenido__solicitud__icono fondo-rojo flex">
                  <MaterialIcon icon="assignment_late"/>
                </div>
                <div className="home__solicitudes__contenido__solicitud__texto">
                  <div className="flex"><MaterialIcon icon="today"/><p>12/03 - 12:30</p></div>
                  <div className="flex"><FontAwesomeIcon icon={faHashtag} /><p>37456</p></div>
                </div>
              </div>
              <div className="home__solicitudes__contenido__solicitud__flecha flex">
                <MaterialIcon icon="chevron_right"/>
              </div>
            </div>
          </div>
      </Tab>      
    </Tabs>       
  );
}

export default Main;