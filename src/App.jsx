import React,{ useState } from 'react';
import { NavBar, Heading,  Features,  Footer,  Difference } from './components';
import './index.css';

const App = () => {
  return (
    <>
    <NavBar />
    <Heading />
    <Features />
    <Difference/>
    <Footer />
    </>
  )
}

export default App

