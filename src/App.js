
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import AcercaDe from './AcerdaDe';
import Contacto from './Contacto';
import Usuarios from './Usuarios';
import Contador from './Contador';
import Categorias from './Categorias';
import Libros from './Libro';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca De</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/usuarios">Usuarios</Link></li>
          <li><Link to="/contador">Contador</Link></li>
          <li><Link to="/categorias">Categoria</Link></li>
          <li><Link to="/libros">Libros</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' exact Component={Inicio}></Route>
        <Route path='/about' Component={AcercaDe}></Route>
        <Route path='/contacto' Component={Contacto}></Route>
        <Route path='/usuarios' Component={Usuarios}></Route>
        <Route path='/contador' Component={Contador}></Route>
        <Route path='/categorias' Component={Categorias}></Route>
        <Route path='/libros' Component={Libros}></Route>
      </Routes>
    </Router>
  );
}

export default App;