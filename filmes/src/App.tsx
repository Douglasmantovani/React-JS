import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home/index';
import Login from './pages/home/login';
import  Router  from './routers';

function App() {
  return (
    <div className="App">
     <Router/>
    </div>
  );
}
export default App;
