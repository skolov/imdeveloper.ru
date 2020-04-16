import React, { CSSProperties } from 'react';
import style from './mobileSteaky.module.scss';


const ACTIVE = {
  opacity: 1,
  width: '160px',
  left: '50%',
  marginLeft: '-80px'
}

const INACTIVE = {
  opacity: 0,
  width: '100%',
  left: '0',
  margin: '40px 0 0'
}


const ICONS = {
  LEFT: [
    'url(/icons/css.png)',
    'url(/icons/react.png)',
    'url(/icons/sass.png)',
    'url(/icons/js.png)',
    'url(/icons/ts.png)',
    'url(/icons/babel.png)',
  ],
  RIGHT: [
    'url(/icons/html.png)',
    'url(/icons/vue.png)',
    'url(/icons/less.png)',
    'url(/icons/es.png)',
    'url(/icons/bs.png)',
    'url(/icons/git.png)',
  ]
}


const leftItems = ICONS.LEFT.map((elem, index) =>
  <span key={index} style={{backgroundImage: elem}}></span>
);
const rightItems = ICONS.RIGHT.map((elem, index) =>
  <span key={index} style={{backgroundImage: elem}}></span>
);




export default class MobileSteaky extends React.Component<any, any>  {


  state: {curtainsIsOpen: boolean} = {
    curtainsIsOpen: false
  }



  getScrollAction = (): void => {
    this.setState({
      curtainsIsOpen: this.props.currentPage === 1 ? true : false
    })
  }




  getCSSCurtains = (): CSSProperties => {
    return this.props.currentPage === 1 ? ACTIVE : INACTIVE;
  } 
  



  componentDidMount(){
    window.addEventListener('scroll', this.getScrollAction, false)
  }



  public render() {
    return (
      <div className={style.mobileBlock}>
        <h1>
          {this.props.language === 'ru' ?
            this.props.pageNames[1] : this.props.pageNames[0]}
        </h1>
        <div className={style.mobilePhone} style={{opacity: this.props.currentPage === 1 ? .4 : 1}}></div>
        <div className={style.curtains} style={this.getCSSCurtains()}>
          <div className={style.columnLeft}>
            {leftItems}
          </div>
          <div className={style.columnRight}>
            {rightItems}
          </div>
        </div>
      </div>
    );
  }
}
  