"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoNav from '../../../public/logo_nav.svg';
import HomeIcon from '../../../public/home.svg';
import UserIcon from '../../../public/user.svg';
import BookIcon from '../../../public/book.svg';
import TredIcon from '../../../public/trend.svg';
import CommentIcon from '../../../public/comment.svg';
import MapIcon from '../../../public/map.svg';
import FolderIcon from '../../../public/folder.svg';
import FlagIcon from '../../../public/flag.svg';
import UserGroupIcon from '../../../public/user_group.svg';
import DocsIcon from '../../../public/docs.svg';
import '../css/navbar.css';

export default function Navbar() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <section className={`navbar ${isMenuVisible ? 'visible' : ''}`}>
      <Link style={{ textDecoration: 'inherit' }} href={''}>
        <Image className='icon--' src={LogoNav} alt={'Logo'} onClick={toggleMenu} />
      </Link>
      {isMenuVisible && (
        <>
          <Link style={{ textDecoration: 'inherit' }} href={'/navigation/home'}>
            <Image className='icon--' src={HomeIcon} alt={'HomeIcon'} />
          </Link>
          <Link style={{ textDecoration: 'inherit' }} href={'/navigation/perfil'}>
            <Image className='icon--' src={UserIcon} alt={'UserIcon'} />
          </Link>
          <Link style={{ textDecoration: 'inherit' }} href={'/navigation/campanha'} >
            <Image className='icon--' src={BookIcon} alt={"BookIcon"}/>
          </Link>
          <Link style={{ textDecoration: 'inherit' }} href={'/navigation/resultados'} >
              <Image className='icon--' src={TredIcon} alt={"TredIcon"}/>
          </Link>
          <Link style={{ textDecoration: 'inherit' }} href={'/navigation/comunicação'} >
              <Image className='icon--' src={CommentIcon} alt={"CommentIcon"}/>
          </Link>
          <Link style={{ textDecoration: 'inherit' }} href={'/navigation/carreira'} >
              <Image className='icon--' src={MapIcon} alt={"MapIcon"}/>
          </Link>
          <Link style={{ textDecoration: 'inherit' }} href={'/navigation/soluções'} >
              <Image className='icon--' src={FolderIcon} alt={"FolderIcon"}/>
          </Link>
          <Link style={{ textDecoration: 'inherit' }} href={'/navigation/melhoresposts'} >
              <Image className='icon--' src={FlagIcon} alt={"FlagIcon"}/>
          </Link>
          <Link style={{ textDecoration: 'inherit' }} href={'/navigation/escola'} >
              <Image className='icon--' src={UserGroupIcon} alt={"UserGroupIcon"}/>
          </Link>
          <Link style={{ textDecoration: 'inherit' }} href={'/navigation/escola'} >
              <Image className='icon--' src={DocsIcon} alt={"DocsIcon"}/>
          </Link>
        </>
      )}
    </section>
  );
}
