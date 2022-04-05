import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <div className="container">
    <Header title='Móda'/>
    <Footer year='2022' author='Czechitas'/>
  </div> 
);

render(<App />, document.querySelector('#app'));
