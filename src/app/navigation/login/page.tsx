import '../../css/css_login.css'
import Image from "next/image";
import Link from 'next/link'
import ArrowRight from '../../../../public/Arrow_Right.svg'
import Line from '../../../../public/line.svg'

export default function Login() {
    return (
      <section className="section_login">
        <Image className='Line' src={Line} alt={""}/>
        <div className='register_cta'>
          <p className='txt_p'>Não possui uma conta? <span className='tt_descri'>Comece sua jornada conosco agora mesmo.</span></p>
          <Image className='ArrowRight' src={ArrowRight} alt={"Seta Direita"}/>
        </div>
        <div className="box-login">
          <div className="acesso">
            <div className="welcome-mensage">
              <h1 className='tt-'>Entre na <br />
                  Sua <span className='traço'>conta</span>
              </h1>
              <p className='tt_descri_tt'>Faça o login para desfrutar de uma <br />experiência personalizada e segura</p>
            </div>
          <div className="login">
            <div className="inputs">
              <input className='input_email' type="text" placeholder="Insira seu endereço de e-mail" />
              <input className='input_password' type="password" placeholder="Informe sua senha" />
              <p className='tt_esq'>Esqueceu sua senha? <span className='tt_rec'>Recupere o acesso à sua conta</span></p>
            </div>
            <Link className='button_link' style={{ textDecoration: 'inherit' }} href={'/navigation/home'}>
              <div className="button_acess">Acesse sua conta agora</div>
            </Link>
          </div>
          </div>
          <p className='tt_descri'>Copyright @belezadiaria 2023 | <span className='txt_p'>Politicas de Privacidade</span></p>
        </div>
      </section>
    )
  }
  