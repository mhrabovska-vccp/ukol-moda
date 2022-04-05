import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import Dresses from './components/Dresses';
import Footer from './components/Footer';

const App = () => (
  <div className="container">
    <Header title='Móda'/>
    <Dresses />
    <Footer year='2022' author='Czechitas'/>
  </div> 
);

render(<App />, document.querySelector('#app'));
