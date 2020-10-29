import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/Home/Index';
import Login from './pages/Login';
import Evento from './pages/Evento/Index';


function Routers(){
    return(
<BrowserRouter>
<Route path="/" exact component={Home}/>
<Route path="/login" exact component={Login}/>
<Route path="/evento" exact component={Evento}/>
</BrowserRouter>
    );
}

export default Routers;