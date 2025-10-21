import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';

export default class DetallesDoctorprofe extends Component {
    state={
        doctor:null
    }
    urlDoc=Global.apiDoctores
    findDoctor=()=>{
        var request="api/doctores/"+this.props.iddoctor;
        axios.get(this.urlDoc+request).then(response=>{
            console.log("Doctor")
            this.setState({
                doctor:response.data
            })
        })
    }
    componentDidMount=()=>{
        this.findDoctor();
    }
    componentDidUpdate=(oldProps)=>{
        if(oldProps.iddoctor != this.props.iddoctor){
            this.findDoctor();
        }
    }
  render() {
    return (
    <div>
        <h1>Detalles</h1><br></br>
        {
            this.state.doctor &&
            (<ul className='list-group list-group-item-dark'>
                <li className='list-group-item'>
                    {this.state.doctor.apellido}
                </li>
                <li className='list-group-item'>
                    {this.state.doctor.especialidad}
                </li>
                <li className='list-group-item'>
                    {this.state.doctor.salario}
                </li>
                <li className='list-group-item'>
                    {this.state.doctor.idHospital}
                </li>
            </ul>)
        }
    </div>
    )
  }
}
