import React, { useState } from 'react';
import EditarPerfil from '../../components/editarperfil';
import '../../css/perfil.css'
import Image from 'next/image'
import Navbar from '../../components/navbar'
import UserPictures from '../../../../public/perfil/user-pictures.svg'
import PatenteEmbaixadora from '../../../../public/perfil/patente-embaixadora.svg'
import BannerUser from '../../../../public/perfil/banner-1.png'
import Bolinha from '../../../../public/perfil/ellipse-4.svg'
import ArrowUp from '../../../../public/perfil/arrow-arrow-up-right-sm.svg'
import InstagramIcon from '../../../../public/perfil/instagram-icon.svg'
import WhatsappIcon from '../../../../public/perfil/whatsapp-icon.svg'
import TiktokIcon from '../../../../public/perfil/tiktok-icon.svg'
import PinterestIcon from '../../../../public/perfil/pinterest.svg'
import YoutubeIcon from '../../../../public/perfil/youtube.svg'
import InterfaceLock from '../../../../public/perfil/interface-lock.svg'
import EmailIcon from '../../../../public/perfil/communication-mail.svg'
import CalendarIcon from '../../../../public/perfil/calendar-event.svg'
import ArrowUpRight from '../../../../public/perfil/arrow-arrow-up-right-sm.svg'
import Banner from '../../components/banner'
import ProfilePage from '../../components/profile'


export default function Home() {
    return (
      <section className='app'>
        <Navbar />
        <section className='page'>
        <section className='perfil'>
            <Image className='User-Avatar' src={UserPictures} alt={"UserPictures"}/>
            <Image src={BannerUser}  alt={"BannerUser"}/>
            <div className="section-user-dados">
                <div className="campos-info-descri">
                    <h1 className='nome-dados'>Giovana Souza</h1>
                    <h3 className='info-localização'>🤯 São Paulo, Brasil</h3>
                    <div className="nivel-user">
                        <p className='tt-nivel'>@gii</p>
                        <Image src={Bolinha} alt={"Bolinha"} />
                        <p className='tt-nivel'>nível Embaixadora</p>
                        <Image src={PatenteEmbaixadora} alt={"PatenteEmbaixadora"} />
                    </div>
                </div>
                <div className="section-right">
                  <EditarPerfil />
                  <div className="social-icons">
                    <Image src={InstagramIcon} alt={"InstagramIcon"}/>
                    <Image src={YoutubeIcon} alt={"YoutubeIcon"}/>
                    <Image src={PinterestIcon} alt={"PinterestIcon"}/>
                    <Image src={WhatsappIcon} alt={"WhatsappIcon"}/>
                    <Image src={TiktokIcon} alt={"TiktokIcon"}/>
                  </div>
                </div>
            </div>   
        </section>
        <div className="section-dados">
              <h1 className='tt-dados'>Dados</h1>
              <div className="campos">
                <div className="campo">
                  <Image src={EmailIcon} alt={"EmailIcon"} />
                  <p className='tt-campo'>giovanasouza@belezadiaria.com</p>
                </div>
                <div className="campo">
                  <Image src={InterfaceLock} alt={"InterfaceLock"} />
                  <p className='tt-campo'>********</p>
                </div>
                <div className="campo">
                  <Image src={CalendarIcon} alt={"CalendarIcon"} />
                  <p className='tt-campo'>27/09/2005</p>
                </div>
              </div>
              <div className="button-dados">
                <Image src={ArrowUpRight} alt={"ArrowUpRight"} />
                <p className='alterar-dados'>Alterar Dados</p>
              </div>
        </div>
        </section>
        
      </section>
    )
  }

