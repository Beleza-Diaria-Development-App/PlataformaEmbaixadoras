import React, { useState } from 'react';
import Navbar from "../../components/navbar"
import "../../css/campanha.css"


export default function Home() {
    return (
      <>
        <Navbar />
        <section className='app'>
          <div className="letreiro-welcome">
              <h1 className='tt-welcome'>Seja Bem Vinda a Plataforma</h1>
              <div className='bd-txt-welcome'>
                <h1 className='tt-welcome-full'>Beleza Diária</h1>
                <p className='tt-p'>Explore um mundo de cuidados personalizados <br /> para realçar sua beleza a cada dia.</p>
              </div>
          </div>
          <div className="box-campanha">
            
          </div>
        </section>
      </>
  )
  }