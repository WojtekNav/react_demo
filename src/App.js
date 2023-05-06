import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './App.css'
import ParticleComp from './components/particles'
import {  Route, Routes } from "react-router-dom";
import Contact from './components/contact/Contact'
import { Header } from './components'
import {Login} from './components/index'
import Signup from './components/signup/Signup'
import About from './components/about/About'

const App = () => {
  return (
    <div className='App'>
      <div><ParticleComp/></div>
      <div className='gradient__bg'>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Header/>} />
          <Route exact path="/About" element={<About/>} />
          <Route exact path="/Contact" element={<Contact/>} />
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/Signup' element={<Signup/>}/>
        </Routes>
      <Footer/>
    </div></div>
  );
};

export default App