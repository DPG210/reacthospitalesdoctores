import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { Navigate } from 'react-router-dom';
export default class CreateHospital extends Component {
    url=Global.apiHospital;

    cajaId=React.createRef();
    cajaNombre=React.createRef();
    cajaDireccion=React.createRef();
    cajaTelefono=React.createRef();
    cajaCamas=React.createRef();

    insertHospital=(event)=>{
        event.preventDefault();
        var request="webresources/hospitales/post"
        //DEBEMOS RESPETAR LOS TIPO DE DATO DEL JSON
        let id= parseInt(this.cajaId.current.value);
        let camas= parseInt(this.cajaCamas.current.value);
        //EL OBJETO JSON DE REACT DEBE RESPETAR MAYUSCULAS/MINUSCULAS
        //Y EL NOMBRE DE LAS PROPIEDADES IGUAL QUE EL SERVICIO
        let hospital={
            idhospital:id,
            nombre:this.cajaNombre.current.value,
            direccion:this.cajaDireccion.current.value,
            telefono:this.cajaTelefono.current.value,
            camas:camas
        }
        axios.post(this.url+request, hospital).then(response=>{
            this.setState({
                mensaje:"Hospital insertado: " + hospital.nombre,
                status:true
            })
        })
    }
    state={
        mensaje:"",
        status: false
    }

  render() {
    return (
      <div>
        {
          this.state.status ==true &&
          <Navigate to="/"></Navigate>
        }
        <h1>Crear Hospital</h1>
        <h3>
            {this.state.mensaje}
        </h3>
        <form>
            <label>Id Hospital:</label>
            <input type='text' ref={this.cajaId} className='form-control'></input>
            <label>Nombre:</label>
            <input type='text' ref={this.cajaNombre} className='form-control'></input>
            <label>Direccion:</label>
            <input type='text' ref={this.cajaDireccion} className='form-control'></input>
            <label>Telefono:</label>
            <input type='text' ref={this.cajaTelefono} className='form-control'></input>
            <label>Camas:</label>
            <input type='text' ref={this.cajaCamas} className='form-control'></input><br></br>
            <button className='btn btn-primary' onClick={this.insertHospital}>Nuevo Hospital</button>
        </form>
      </div>
    )
  }
}
