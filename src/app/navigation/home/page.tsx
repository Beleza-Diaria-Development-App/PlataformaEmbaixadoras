'use client'
import Navbar from '../../components/navbar'
import Image from "next/image";
import ProfileBanner from '../../../../public/home/profile.svg'
import YoutubeIcon from '../../../../public/home/youtube.svg'
import InstaIcon from '../../../../public/home/instagram.svg'
import FacebookIcon from '../../../../public/home/facebook.svg'
import ArrowUp from '../../../../public/home/vector-up.svg'
import ArrowUpMetricGreen from '../../../../public/home/vector-up-metric-green.svg'
import ArrowUpValor from '../../../../public/home/vector-4.svg'
import ArrowRight from '../../../../public/home/vector-2.svg'
import CurrentDat from '../../components/CurrentDate';
import Letreiro from '../../components/letreiro'
import '../../css/css_home.css'

import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  return (
    <>
    <Navbar />
    <section className='app'>
      <Letreiro />
      <div className="section-top-1">
        <div className="user-div">
          <Image className='ProfileBanner' src={ProfileBanner} alt='ProfileBanner' />
          <div className="txt-banner-user">
            <p className='p'>Bem vinda de volta</p>
            <h1 className='h1'>Giovana S.</h1>
          </div>
          <div className="button_dashboard" onClick={() => router.push('/navigation/campanha')}>
            Ver seu dashboard
          </div>
        </div>
        <div className="social-div">
            <div className="social-box-top">
              <div className="box-dados">
                <Image src={FacebookIcon} alt='FacebookIcon' />
                <div className="dados">
                  <Image src={ArrowUp} alt='ArrowUp' />
                  0%
                </div>
              </div>
              <div className="metrics-dados">
                <Image src={ArrowUpMetricGreen} alt='ArrowUpMetricGreen' />
                0
              </div>
              <p className='p-box'>Assinantes <br /> Novos</p>
            </div>
            <div className="social-box-top">
              <div className="box-dados">
                <Image src={InstaIcon} alt='InstaIcon' />
                <div className="dados">
                  <Image src={ArrowUp} alt='ArrowUp' />
                  0%
                </div>
              </div>
              <div className="metrics-dados">
                <Image src={ArrowUpMetricGreen} alt='ArrowUpMetricGreen' />
                0
              </div>
              <p className='p-box'>Assinantes <br /> Novos</p>
            </div>
            <div className="social-box-top">
              <div className="box-dados">
                <Image src={YoutubeIcon} alt='YoutubeIcon' />
                <div className="dados">
                  <Image src={ArrowUp} alt='ArrowUp' />
                  0%
                </div>
              </div>
              <div className="metrics-dados">
                <Image src={ArrowUpMetricGreen} alt='ArrowUpMetricGreen' />
                0
              </div>
              <p className='p-box'>Assinantes <br /> Novos</p>
          </div>
        </div>
        <div className="money-div">
          <div className="txt-valor">
            <h1 className='h1-valor'>R$0.00</h1>
            <CurrentDat />
          </div>
          <div className="transacions">
            <p className='txt-p'>Hoje</p>
            <div className="box-transi">
            <div className="transi--">
              <div className="tranasi-">
                <Image src={ArrowUpValor} alt='ArrowUpValor' />
                <div className="txt-dados-transi">
                  <h1 className='txt-p'>XXXXXX</h1>
                  <h3 className='date'>XXXXX</h3>
                </div>
              </div>
              <Image src={ArrowRight} alt='ArrowRight' />
            </div>
            <div className="transi--">
              <div className="tranasi-">
                <Image src={ArrowUpValor} alt='ArrowUpValor' />
                <div className="txt-dados-transi">
                  <h1 className='txt-p'>XXXXXX</h1>
                  <h3 className='date'>XXXXX</h3>
                </div>
              </div>
              <Image src={ArrowRight} alt='ArrowRight' />
            </div>
            <div className="transi--">
              <div className="tranasi-">
                <Image src={ArrowUpValor} alt='ArrowUpValor' />
                <div className="txt-dados-transi">
                  <h1 className='txt-p'>XXXXXX</h1>
                  <h3 className='date'>XXXXX</h3>
                </div>
              </div>
              <Image src={ArrowRight} alt='ArrowRight' />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}