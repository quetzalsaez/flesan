import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './assets/images/logo.png';
import https from 'https';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons' */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  useHistory
} from "react-router-dom";
import Main from './Main';
import GenerarSolicitud from './GenerarSolicitud';
import AgregarItem from './AgregarItem';
import DetalleItem from './DetalleItem';
import PantallaFinal from './PantallaFinal';
import EditarItem from './EditarItem';
import {serviciosFlesan} from './api/servicios'
import hideVirtualKeyboard from 'hide-virtual-keyboard';
import { useDispatch } from 'react-redux';
import { tokenSave } from './features/estadoApp/estadoAppSlice';
import GoogleLogin from 'react-google-login';

export default function App() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />     
        <Route exact path="/main" component={Main} /> 
        <Route exact path="/generarSolicitud" component={GenerarSolicitud} /> 
        <Route exact path="/agregarItem" component={AgregarItem} /> 
        <Route exact path="/detalleItem" component={DetalleItem} /> 
        <Route exact path="/pantallaFinal" component={PantallaFinal} /> 
        <Route exact path="/editarItem/:materialId" component={EditarItem} /> 
      </Switch>
    )
}

function LoginButton() {
  let history = useHistory();  

  function handleClick() {
    /* console.log(props.name+props.pass); */      
    document.activeElement.blur();
    hideVirtualKeyboard();      
    history.push("/main");    
  }

  return (
    <button type="button" onClick={handleClick}>
      Login
    </button>
  );
}

function Login() {
     const [nombre, setNombre] = useState('');
     const [pass, setPass] = useState('');
     const [servicio, setServicio] = useState('');
    /* constructor(props) {
      super(props);
      this.state = {nameValue: '', passValue: '', servicio: ''};    
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);            
    }   */   
    const dispatch = useDispatch(); 
    
    const getToken = async () => {
      var qs = require('qs');
      var servicios = new serviciosFlesan();        
      var respuesta = await servicios.getToken();    
        console.log(respuesta["access_token"]);
        dispatch(tokenSave([
          respuesta["access_token"]
        ]))       
    }

    useEffect(() => {
      getToken()
    })              
    
    const handleName = e => setNombre(e.target.value);
    const handlePass = e => setPass(e.target.value);
  
    /* async handleSubmit(event) {      
      event.preventDefault();
      const response = await axios.get(
        'http://conectadev.portal.vsoft.cl/api/jsonws/vs-bpm-screen-portlet.customize/get-list-obras',
        { data: {companyId: 25728, groupId: 25754, userId: 223645} },      
        { headers: {'Authorization': 'UwnjnP6AbTQsc6bN9cx7',  'Access-Control-Allow-Origin': "*", 'Content-Type': 'application/json'} }
      ).then((response) => {
        console.log(response.data)  
      })          
      history.push("/home");
    } */
    const responseGoogle = (response) => {
      console.log(response);
    }
    
  
    return (
      <div className="fondo-app-login flex">
          <div>
            {/* <button onClick={this.getData}><img src={logo}/></button>              */}
            <img src={logo}/>
          </div>       
          <form className='flex' /* onSubmit={this.handleSubmit} */>
          <GoogleLogin
            clientId="548770568782-71nabc6upf7olc96o9rr5r7a1rg99i07.apps.googleusercontent.com"
            render={renderProps => (
              <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />,
            {/* <label><input className='input' name='nameValue' type="text" value={nombre} placeholder='Nombre usuario' onChange={handleName} /></label>
            <label><input className='input' name='passValue' type="password" value={pass} placeholder='Clave' onChange={handlePass} /></label> */}
            <p>{servicio != '' ? servicio : ''}</p>
            {/* <input type="submit" value="Login" />       */}                    
          </form>       
          <LoginButton /* name={nombre} pass={pass} */ />
          {/* <Link to="./Home">Tacos</Link>  */}
          {/* <Switch>
              <Route path="/" component={App}/>
            </Switch> */}
      </div>
      )
  }
