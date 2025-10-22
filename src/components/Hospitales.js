import React, { Component } from 'react'
import Global from './../Global' 
import axios from 'axios'

export default class Hospitales extends Component {
  url=Global.apiHospital;
  state={
    hospitales:[]
  }

  loadHospitales=()=>{
    let request="webresources/hospitales";

    axios.get(this.url+request).then(response=>{
      this.setState({
        hospitales:response.data
      })
    })
  }

  componentDidMount=()=>{
    this.loadHospitales();
  }
  render() {
    return (
      <div>
        <h1>Hospitales</h1>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Nombre</td>
              <td>direccion</td>
              <td>telefono</td>
              <td>camas</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.hospitales.map((hospital,index)=>{
                return(<tr key={index}>
                  <td>{hospital.idhospital}</td>
                  <td>{hospital.nombre}</td>
                  <td>{hospital.direccion}</td>
                  <td>{hospital.telefono}</td>
                  <td>{hospital.camas}</td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
