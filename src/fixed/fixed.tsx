import React, { CSSProperties } from 'react';
import style from './fixed.module.scss';
import Swiper from 'swiper';


const SITES = [
  'deka-auto.ru',
  'autoserviceone.ru',
  'lockair.ru'
]


const LINKS = [
  'https://deka-auto.ru',
  'https://autoserviceone.ru',
  'https://lockair.ru'
]


const SWIPERSTYLE: CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  transitionProperty: 'transform',
  boxSizing: 'content-box'
}



export default class Fixed extends React.Component<any, any>  {



  getSwiper = (): void => {
    new Swiper('.swiper-container', {
      direction: 'horizontal',
      speed: 400,
      spaceBetween: 20
    })
  }



  getCards = (): JSX.Element[] => {
    let cards: JSX.Element[] = [];

    for (let index = 0; index < 3; index++) {
      cards.push(
        <div className={style.oneCardLining} key={index}>
          <div className={style.oneCard} style={{backgroundImage: `url(ex_${index + 1}.jpg)`}}>
            <div className={style.siteImageShadow}>
              <div className={style.head}>{SITES[index]}</div>
              <span></span>
            </div>
            <div className={style.toProjectHolder}>
              <a href={LINKS[index]}>
                <div className={style.toProject}>{this.props.language === 'ru' ? 'К проекту' : 'To project'}</div>
              </a>
            </div>
          </div>
          <div className={style.shadow} style={{backgroundImage: `url(/codesmall_${index + 1}.png)`}}></div>
        </div>
      )
    }
    return cards
  }





  getMobileCards = (): JSX.Element => {
    let cards: JSX.Element[] = this.getCards();

    return (
      <div className={style.slideBlock}>
        <div className='swiper-container' style={{width: '70%', height: '100%', margin: '0 15%'}}>
          <div className="swiper-wrapper" style={SWIPERSTYLE}>
            {cards.map((element: JSX.Element, i = 0) => {
              i++;
              return(
                <div className="swiper-slide" key={i}>
                  <div className={style.oneSlide}>
                    {element}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }



  componentDidMount() {
    this.getSwiper()
  }



  public render() {
    return (
      <div className={style.fixedContainer} id={this.props.pageNames[0]}>
        <div className={style.mainBoard}>
          <div className={style.centerBoard}>

            <h1>{this.props.language === 'ru' ? this.props.pageNames[1] : this.props.pageNames[0]}</h1>
            
            <div className={style.portfolio}>
              {this.getCards()}
            </div>

            <div className={style.mobileSwipe}>
              {this.getMobileCards()}
            </div>


            <div className={style.github}>
              <a href="https://github.com/skolov">
                <div className={style.link}>
                  <span></span>
                </div>
              </a>
            </div>

          </div>  
        </div>
      </div>
    );
  }



  
}
  