import '../css/css_home.css'
import Image from "next/image";
import Link from 'next/link'
import LogoNav from '../../../public/logo_nav.svg'
import HomeIcon from '../../../public/home.svg'
import UserIcon from '../../../public/user.svg'
import BookIcon from '../../../public/book.svg'
import TredIcon from '../../../public/trend.svg'
import CommentIcon from '../../../public/comment.svg'
import MapIcon from '../../../public/map.svg'
import FolderIcon from '../../../public/folder.svg'
import FlagIcon from '../../../public/flag.svg'
import UserGroupIcon from '../../../public/user_group.svg'
import DocsIcon from '../../../public/docs.svg'



export default function Navbar() {
    return (
        <section className='navbar'>
             <div className="itens-home">
                <Link style={{ textDecoration: 'inherit' }} href={'/navigation/home'} >
                    <Image src={LogoNav} alt={"Logo"}/>
                </Link>
                <Link style={{ textDecoration: 'inherit' }} href={'/navigation/home'} >
                    <Image src={HomeIcon} alt={"HomeIcon"}/>
                </Link>
                <Link style={{ textDecoration: 'inherit' }} href={'/navigation/perfil'} >
                    <Image src={UserIcon} alt={"UserIcon"}/>
                </Link>
                <Link style={{ textDecoration: 'inherit' }} href={'/navigation/campanha'} >
                    <Image src={BookIcon} alt={"BookIcon"}/>
                </Link>
                <Link style={{ textDecoration: 'inherit' }} href={'/navigation/resultados'} >
                    <Image src={TredIcon} alt={"TredIcon"}/>
                </Link>
                <Link style={{ textDecoration: 'inherit' }} href={'/navigation/comunicação'} >
                    <Image src={CommentIcon} alt={"CommentIcon"}/>
                </Link>
                <Link style={{ textDecoration: 'inherit' }} href={'/navigation/carreira'} >
                    <Image src={MapIcon} alt={"MapIcon"}/>
                </Link>
                <Link style={{ textDecoration: 'inherit' }} href={'/navigation/soluções'} >
                    <Image src={FolderIcon} alt={"FolderIcon"}/>
                </Link>
                <Link style={{ textDecoration: 'inherit' }} href={'/navigation/melhoresposts'} >
                    <Image src={FlagIcon} alt={"FlagIcon"}/>
                </Link>
                <Link style={{ textDecoration: 'inherit' }} href={'/navigation/escola'} >
                    <Image src={UserGroupIcon} alt={"UserGroupIcon"}/>
                </Link>
                <Link style={{ textDecoration: 'inherit' }} href={'/navigation/escola'} >
                    <Image src={DocsIcon} alt={"DocsIcon"}/>
                </Link>
             </div>
        </section>
    )
  }
