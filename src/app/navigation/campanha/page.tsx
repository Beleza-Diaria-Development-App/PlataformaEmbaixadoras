import React, { useState } from 'react';
import EditarPerfil from '../../components/editarperfil';
import Navbar from "../../components/navbar"
import '../../css/css_home.css'
import "../../css/campanha.css"


export default function Home() {
    return (
      <section className=''>
        <Navbar />
        <div className="letreiro-welcome">
            <h1 className='tt-welcome'>Seja Bem Vinda a Plataforma</h1>
            <div className='bd-txt-welcome'>
              <h1 className='tt-welcome-full'>Beleza Diária</h1>
              <p className='tt-p'>Explore um mundo de cuidados personalizados para realçar sua beleza a cada dia.</p>
            </div>
          </div>
      </section>
  )
  }

