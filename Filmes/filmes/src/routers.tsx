import React from 'react';
import {BrowserRouter,Route, Router} from 'react-router-dom'
import Cadastro from './pages/home/cadastro';
import Filme from './pages/home/filme';
import FilmeComum from './pages/home/filmeComum';
import Genero from './pages/home/genero/indeix';
import Home from './pages/home/home/index'
import Login from './pages/home/login/index'
import Perfil from './pages/home/perfil';

function Routers(){
    return(
      <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/cadastro" component={Cadastro}/>
      <Route path="/perfil" component={Perfil}/>
      <Route path="/filme" component={Filme}/>
      <Route path="/genero" component={Genero}/>
      <Route path="/filmecomum" component={FilmeComum}/>
      
      </BrowserRouter>
    );
}

export default Routers;