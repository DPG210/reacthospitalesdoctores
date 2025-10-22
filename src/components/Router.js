import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import MenuHospitales from './MenuHospitales';
import Doctores from './Doctores';
import CreateHospital from './CreateHospital';
import Hospitales from './Hospitales';

export default class Router extends Component {
  render() {
    function DoctoresElement (){
        let {idhospital}=useParams();
        return(<Doctores idhospital={idhospital}></Doctores>)
    }

    return (
      <BrowserRouter>
      <MenuHospitales></MenuHospitales>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/doctores/:idhospital" element={<DoctoresElement/>}></Route>
            <Route path="/create" element={<CreateHospital></CreateHospital>}></Route>
            <Route path="/hospitales" element={<Hospitales></Hospitales>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
