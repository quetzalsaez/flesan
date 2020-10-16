import axios from 'axios';
import qs from 'qs';

export class serviciosFlesan {  
  login = async (token, mail) => {
    var respuesta;    
      var config = {
        method: 'get',
        url: "http://localhost:8080/api/rest/login.xsjs/1?$filter=startswith(eMail,'dcollas@flesan.com.pe')",
        headers: { 
          'Authorization': 'Bearer ' + token          
      },       
      };       
      await axios(config)
      .then((response) => {
       respuesta = response.data;
      })
      .catch(function (error) {
       respuesta = error
      });
      return respuesta
  }
  
  getToken = async () => {
    var respuesta;
    const data = qs.stringify({
      grant_type: "password",
      username: "admin",
      password: "admin",
      })
      var config = {
      method: 'post',
      url: 'http://localhost:8080/token',
      headers: { 
          'Authorization': 'Basic YmZXRnhTYlBIWFFsSDhUdWh4eHBiSGZmYjBNYTpFUnBoUVVXeVZjbVpBM3VCZ3FXNjZzbm9CMThh', 
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
      };       
      await axios(config)
      .then((response) => {
       respuesta = response.data;
      })
      .catch(function (error) {
       respuesta = error
      });
      return respuesta
  }

  getItems = async (token) => {    
    var respuesta;            
      var config = {
        method: 'get',
        /* url: "http://localhost:8080/api/rest/item.xsjs/1?$select=ItemCode,ItemName,QuantityOnStock,ItemsGroupCode&$filter=startswith(ItemName,'" + filter + "')", */
        url: "http://localhost:8080/api/rest/item.xsjs/1?$select=ItemCode,ItemName,QuantityOnStock,ItemsGroupCode",
        headers: { 
          'Authorization': 'Bearer ' + token          
        },      
      };       
      await axios(config)
      .then(function (response) {
       respuesta = response.data;
      })
      .catch(function (error) {
       respuesta = error
      });
      return respuesta
  }

  getCategorias = async (token) => {    
    var respuesta;            
      var config = {
        method: 'get',        
        url: "http://localhost:8080/api/rest/itemGroups.xsjs/1",
        headers: { 
          'Authorization': 'Bearer ' + token          
        },      
      };       
      await axios(config)
      .then(function (response) {
       respuesta = response.data;
      })
      .catch(function (error) {
       respuesta = error
      });
      return respuesta
  }
}