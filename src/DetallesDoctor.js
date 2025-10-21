import React, { Component } from 'react'
import Global from './Global'

export default class DetallesDoctor extends Component {

    state={
        doctor:[]
    }

    loadDoctores=()=>{
        this.setState({
            doctor:this.props.doctor
        })
    }
    componentDidMount=()=>{
        this.loadDoctores();
    }
    componentDidUpdate=(oldProps)=>{
        if(oldProps.doctor != this.props.doctor){
            this.loadDoctores();
        }
    }
    
  render() {
    return (
      <div>
        {
            <button onClick={()=>{this.props.seleccionardoctor(this.state.doctor)}}>Detalles</button>
        }
      </div>
    )
  }
}
