import '../../css/css_home.css'
import Navbar from '../../components/navbar'
import Image from "next/image";
import Link from "next/link";
import ProfileBanner from '../../../../public/home/profile.svg'
import YoutubeIcon from '../../../../public/home/youtube.svg'
import InstaIcon from '../../../../public/home/instagram.svg'
import FacebookIcon from '../../../../public/home/facebook.svg'
import ArrowUp from '../../../../public/home/vector-up.svg'
import ArrowUpMetricGreen from '../../../../public/home/vector-up-metric-green.svg'
import ArrowUpValor from '../../../../public/home/vector-4.svg'
import ArrowRight from '../../../../public/home/vector-2.svg'
import CurrentDat from '../../components/CurrentDate';

export default function Home() {
    return (
      <section className='app'>
        <Navbar />
        <section className='home-page'>
          <div className="letreiro-welcome">
            <h1 className='tt-welcome'>Seja Bem Vinda a Plataforma</h1>
            <div className='bd-txt-welcome'>
              <h1 className='tt-welcome-full'>Beleza Diária</h1>
              <p className='tt-p'>Explore um mundo de cuidados personalizados para realçar sua beleza a cada dia.</p>
            </div>
          </div>
          <div className="section-top">
            <div className="section-user">
              <Image src={ProfileBanner} alt={"Profile-Banner"}/>
              <div className="name-profile">
                <h3 className='h3-profile'>Bem vinda de volta</h3>
                <h1 className='h1-profile-name'>Giovana S.</h1>
              </div>
              <Link className='button_campanha' style={{ textDecoration: 'inherit' }} href={'/navigation/campanha'}>
                <div className="button_campanha">Ver Suas Campanhas</div>
              </Link>
            </div>
            <div className="social-metrics">
              <div className="face-insta">
                <div className="box-social-facebook">
                  <div className="metrics">
                    <Image src={FacebookIcon} alt={"FacebookIcon"}/>
                    <div className="number">
                      <Image src={ArrowUp} alt={"ArrowUp"}/>
                      <p className='valor-porcento'>0%</p>
                    </div>
                  </div>
                  <div className="dados">
                    <Image src={ArrowUpMetricGreen} alt={"ArrowUpMetricGreen"}/>
                    <p className='valor-metrica-social'>0</p>
                  </div>
                  <p className='descri-social-box'>Assinantes <br />Novos</p>
                </div>
                <div className="box-social-instagram">
                  <div className="metrics">
                    <Image src={InstaIcon} alt={"InstaIcon"}/>
                    <div className="number">
                      <Image src={ArrowUp} alt={"ArrowUp"}/>
                      <p className='valor-porcento'>0%</p>
                    </div>
                  </div>
                  <div className="dados">
                    <Image src={ArrowUpMetricGreen} alt={"ArrowUpMetricGreen"}/>
                    <p className='valor-metrica-social'>0</p>
                  </div>
                  <p className='descri-social-box'>Assinantes <br />Novos</p>
                </div>
              </div>
              <div className="box-social-youtube">
                  <div className="metrics">
                    <Image src={YoutubeIcon} alt={"YoutubeIcon"}/>
                    <div className="number">
                      <Image src={ArrowUp} alt={"ArrowUp"}/>
                      <p className='valor-porcento'>0%</p>
                    </div>
                  </div>
                  <div className="dados">
                    <Image src={ArrowUpMetricGreen} alt={"ArrowUpMetricGreen"}/>
                    <p className='valor-metrica-social'>0</p>
                  </div>
                  <p className='descri-social-box'>Assinantes <br />Novos</p>
              </div>
            </div>
            <div className="section-results">
              <div className="valor-data">
                <h1 className='H1-valor-resultado'>R$0</h1>
                <CurrentDat />
              </div>
              <h3 className='hj-data'>Hoje</h3>
              <div className="transactions">
                <div className="transcaion">
                  <Image src={ArrowUpValor} alt={"ArrowUpValor"}/>
                  <div className="especifi-">
                    <div className="name-">
                      <h2 className='name-pagador'>XXXXXX XX</h2>
                      <div className='new-transation'>
                        Novo
                      </div>
                    </div>
                    <p className='codigo-pagador'>XXXXXXXX</p>
                  </div>
                  <Image className='ArrowRight-' src={ArrowRight} alt={"ArrowRight"} />
                </div>
                <div className="transcaion">
                  <Image src={ArrowUpValor} alt={"ArrowUpValor"}/>
                  <div className="especifi-">
                    <div className="name-">
                      <h2 className='name-pagador'>XXXXXX XX</h2>
                      <div className='new-transation'>
                        Novo
                      </div>
                    </div>
                    <p className='codigo-pagador'>XXXXXXXX</p>
                  </div>
                  <Image className='ArrowRight-' src={ArrowRight} alt={"ArrowRight"} />
                </div>
                <div className="transcaion">
                  <Image src={ArrowUpValor} alt={"ArrowUpValor"}/>
                  <div className="especifi-">
                    <div className="name-">
                      <h2 className='name-pagador'>XXXXXX XX</h2>
                      <div className='new-transation'>
                        Novo
                      </div>
                    </div>
                    <p className='codigo-pagador'>XXXXXXXX</p>
                  </div>
                  <Image className='ArrowRight-' src={ArrowRight} alt={"ArrowRight"} />
                </div>

              </div>
              <div className="button-more-results"><p>Ver Mais</p></div>
            </div>
          </div>
        </section> 
      </section>
    )
  }

