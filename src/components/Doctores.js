import React, { Component } from 'react'
import Global from './../Global'
import axios from 'axios';
import DetallesDoctor from '../DetallesDoctor';
import DetallesDoctorprofe from './DetallesDoctorprofe';

export default class Doctores extends Component {
    
    urlDoctor=Global.apiDoctores;
    
    state={
        doctores:[],
        doctor:null,
        idDoctor:-1
    }
    loadDoctores=()=>{
        
        var request="api/Doctores/DoctoresHospital/"+ this.props.idhospital

        axios.get(this.urlDoctor+request).then(response=>{
            console.log("En doctores");
            this.setState({
                doctores:response.data
            })
        })
    }
    componentDidMount=()=>{
        this.loadDoctores();
    }

    componentDidUpdate=(oldProps)=>{
        if(oldProps.idhospital != this.props.idhospital){
            this.loadDoctores();
            this.setState({
                idDoctor:-1
            });
        }
    }

    // selecionarDoctor=(doctor)=>{
    //     console.log("ESte es mi doctor");
        
    //     this.setState({
    //         doctor:doctor
    //     })
    // }


  render() {
    
    return (
      <div>
        <h2 style={{color:"red"}}>
            Doctores {this.props.idhospital}
        </h2>
        {/* {
            this.state.doctor &&
            (<div>
                <h1>{this.state.doctor.apellido}</h1>
                <h1>{this.state.doctor.especialidad}</h1>
                <h1>{this.state.doctor.salario}</h1>
                <h1>{this.state.doctor.idHospital}</h1>
            </div>)
        } */}
        {
            this.state.idDoctor != -1 &&
            <DetallesDoctorprofe iddoctor={this.state.idDoctor}></DetallesDoctorprofe>
        }
        
        <table className='table table-primary table-striped-columns text-center' >
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Especialidad</th>
                    <th>Salario</th>
                    <th>Id Hospital</th>
                    <th>Detalles</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.doctores.map((doctor,index)=>{
                        return(<tr key={index}>
                            <td>{doctor.apellido}</td>
                            <td>{doctor.especialidad}</td>
                            <td>{doctor.salario}</td>
                            <td>{doctor.idHospital}</td>
                            {/* <td><DetallesDoctorprofe iddoctor={doctor.idDoctor}
                            seleccionardoctor={this.selecionarDoctor}></DetallesDoctorprofe></td> */}
                            <td>
                                <button className='btn btn-info' onClick={()=>{
                                    this.setState({
                                        idDoctor:doctor.idDoctor
                                    })
                                }}>Detalles</button>
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
