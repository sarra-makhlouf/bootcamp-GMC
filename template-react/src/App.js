import React, { Fragment } from 'react';

import NavBar from './components/navbar';
import Carousel from './components/carousel';
import Features from './components/features';
import Values from './components/values';
import Customers from './components/customers';
import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <Fragment>
      <NavBar />
      <main>
        <Carousel />
        <Features />
        <Values />
        <Customers />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
