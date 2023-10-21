import React,{ useState } from 'react';
import { NavBar, Heading,  Features, Difference, Cta, Footer } from './components';
import './index.css';

const App = () => {
  return (
    <>
    <NavBar />
    <Heading />
    <Features />
    <Difference/>
    <Cta />
    <Footer />
    </>
  )
}

export default App

