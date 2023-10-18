import React,{ useState } from 'react';
import { NavBar, Heading,  Features,  Footer,  Difference } from './components';
import './index.css';

const App = () => {
  return (
    <>
    <h1 className=''>hello world. tailwind css</h1>
    <NavBar />
    <Heading />
    <Features />
    <Footer />
    <Difference/>
    </>
  )
}

export default App

