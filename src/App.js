import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './assets/images/logo.png';
import axios from 'axios';
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
import hideVirtualKeyboard from 'hide-virtual-keyboard';

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

function LoginButton(props) {
  let history = useHistory();
  

  const getData = async () => {  

    console.log('paso')        
    /* fetch('https://159.138.119.95:4300/api/rest/itemGroups.xsjs', {       
    }).then((response) => {
      alert(response.body);      
    })  */
    const agent = new https.Agent({rejectUnauthorized:false})
    agent.requests.
    fetch('https://159.138.119.95:4300/api/rest/itemGroups.xsjs',{agent}).then((response) => {
      alert(response.body);      
    })  
 
  }

  function handleClick() {
    console.log(props.name+props.pass);      
    document.activeElement.blur();
    hideVirtualKeyboard();  
    getData();
    /* history.push("/main"); */
    
  }

  return (
    <button type="button" onClick={handleClick}>
      Login
    </button>
  );
}

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {nameValue: '', passValue: '', servicio: ''};    
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.getData = this.getData.bind(this);
    }    
  
    async getData() {      
      /* const response = await axios.get(
        'http://conectadev.portal.vsoft.cl/api/jsonws/vs-bpm-screen-portlet.customize/get-list-obras',
        { data: {companyId: 25728, groupId: 25754, userId: 223645} },      
        { headers: {'Authorization': 'UwnjnP6AbTQsc6bN9cx7',  'Access-Control-Allow-Origin': "*", 'Content-Type': 'application/json'} }
      ).then((response) => {
        console.log(response.data)  
      }) 
      console.log('hola'); */ 
      fetch('https://159.138.119.95:4300/api/rest/itemGroups.xsjs', {       
      }).then((response) => {
        alert(response.body);
        /* this.setState({servicio: String(response.body)}); */
      }) 
    }
  
    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
  
    async handleSubmit(event) {      
      /* event.preventDefault();
      const response = await axios.get(
        'http://conectadev.portal.vsoft.cl/api/jsonws/vs-bpm-screen-portlet.customize/get-list-obras',
        { data: {companyId: 25728, groupId: 25754, userId: 223645} },      
        { headers: {'Authorization': 'UwnjnP6AbTQsc6bN9cx7',  'Access-Control-Allow-Origin': "*", 'Content-Type': 'application/json'} }
      ).then((response) => {
        console.log(response.data)  
      })  */         
      /* history.push("/home"); */
    }

    
  
    render() {
        return (
        <div className="fondo-app-login flex">
            <div>
              {/* <button onClick={this.getData}><img src={logo}/></button>              */}
              <img src={logo}/>
            </div>       
            <form className='flex' onSubmit={this.handleSubmit}>
              <label><input className='input' name='nameValue' type="text" value={this.state.nameValue} placeholder='Nombre usuario' onChange={this.handleChange} /></label>
              <label><input className='input' name='passValue' type="password" value={this.state.passValue} placeholder='Clave' onChange={this.handleChange} /></label>
              <p>{this.state.servicio != '' ? this.state.servicio : ''}</p>
              {/* <input type="submit" value="Login" />       */}                    
            </form>       
            <LoginButton name={this.state.nameValue} pass={this.state.passValue} />
            {/* <Link to="./Home">Tacos</Link>  */}
            {/* <Switch>
                <Route path="/" component={App}/>
              </Switch> */}
        </div>
        );
    }
  }
