// Troque 'use client' para 'use-client'
'use client';
import '../../css/css_login.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../../public/logo_nav.svg';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  return (
    <>
      <div className="section-login">
        <Image className="Logo" src={Logo} alt="Logo" />
        <div className="text-welcome">
          <h1 className="h1-1">
            Entre na <br /> sua <span className="h1-pink-1">conta</span>
          </h1>
          <p className="p-1">
            Faça o login para desfrutar de uma <br /> experiência personalizada e segura
          </p>
        </div>
        <div className="inputs">
          <input className="input" type="text" placeholder="Insira seu endereço de e-mail" />
          <input className="input" type="password" placeholder="Informe sua senha" />
          <p className="p-d">
            Esqueceu sua senha? <span className="p-d-span">Recupere o acesso à sua conta</span>
          </p>
        </div>
        <div className="button_login" onClick={() => router.push('/navigation/home')}>
          Acesse sua conta agora
        </div>
        <p className="p-d">
          Copyright @belezadiaria 2024 | Politicas de Privacidade
          </p>
      </div>
    </>
  );
}
