'use client'
import React, { useState } from 'react';
import '../css/perfil.css'
import Image from 'next/image'
import ArrowUp from '../../../public/perfil/arrow-arrow-up-right-sm.svg'
import Modal from '../components/Modal';
import BannerSelect1 from '../../../public/perfil/banerselect1.png'
import BannerSelect2 from '../../../public/perfil/banerselect2.png'
import BannerSelect3 from '../../../public/perfil/banerselect3.png'
import BannerSelect4 from '../../../public/perfil/banerselect4.png'
import BannerSelect5 from '../../../public/perfil/banerselect5.png'
import Banner from '../components/banner';



const OutraPagina = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div>
        {/* Seu conteúdo da outra página */}
        <div onClick={handleOpenModal} className='button-edit-profile'>
            <Image src={ArrowUp} alt={"ArrowUp"} />
            <p className='edit-name' onClick={handleOpenModal}>Editar Perfil</p>
        </div>
  
        {/* O Modal sem o botão de fechar */}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="tt-save">
            <h1 className='tt-config-user'>Altere sua capa</h1>
            <p className='save-exit-config-user' onClick={handleCloseModal}>Salvar Perfil</p>
          </div>
          <div className="banners">
            <Image className='banner-select' src={BannerSelect1} alt={"BannerSelect1"} />
            <Image className='banner-select' src={BannerSelect2} alt={"BannerSelect2"} />
            <Image className='banner-select' src={BannerSelect3} alt={"BannerSelect3"} />
            <Image className='banner-select' src={BannerSelect4} alt={"BannerSelect4"} />
            <Image className='banner-select' src={BannerSelect5} alt={"BannerSelect5"} />

          </div>
        </Modal>
      </div>
    );
  };
  
  export default OutraPagina;

