import React from 'react';
import {BrowserRouter,Route, Router} from 'react-router-dom'
import Cadastro from './pages/home/cadastro';
import Home from './pages/home/home/index'
import Login from './pages/home/login/index'

function Routers(){
    return(
      <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/cadastro" component={Cadastro}/>
      
      </BrowserRouter>
    );
}

export default Routers;