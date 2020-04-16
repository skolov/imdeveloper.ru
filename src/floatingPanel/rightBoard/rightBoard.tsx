import React, { CSSProperties } from 'react';
import style from './rightBoard.module.scss';
import instIco from '../../inst.svg';
import vkIco from '../../vk.svg';

import Menu from './menu/menu';


const ACTIVE: CSSProperties = {
  width: "50px",
  opacity: '1'
};


const TURNEDOFF: CSSProperties = {
  width: "40px",
  opacity: '.3'
}



export default class RightBoard extends React.Component<any, any>  {


  state:{
    toggleMenu: boolean
  } = {
    toggleMenu: false
  }


  goToAim = (page: string): void => {
    let elem = document.getElementById(page);
    elem?.scrollIntoView({block: "center", behavior: "smooth"});
  }



  getStacks = (): JSX.Element[] => {
    let arr:JSX.Element[] = [];
    for (let index = 0; index < 4; index++) {
      let style = index === this.props.currentPage ? ACTIVE : TURNEDOFF;
      arr.push(
        <div key={index} onClick={()=>{this.goToAim(this.props.pageNames.en[index])}}>
          <span style={style}></span>
        </div>
      )
    }
    return arr;
  }



  getClassNameHamburger = (): string => {
    return !this.state.toggleMenu ? style.menuBtn : style.menuBtn + ' ' + style.menuBtnOpen;
  }



  toggleMenu = (): void => {
    this.setState((prevstate: any) => ({ toggleMenu: !prevstate.toggleMenu}))
  }



  public render() {
    return (

      <div className={style.rightBoard}>
        <div className={style.socialPanel}>

          <div className={style.item}>
            <a href="https://www.instagram.com/mark.skolov/"><img alt='instIco' width='30px' src={instIco}/></a>
          </div>

          <div className={style.item}>
            <a href="https://vk.com/mark.skolov"><img alt='vkIco' width='30px' src={vkIco}/></a>
          </div>

          <div className={style.item}>
            <span onClick={this.props.changeLanguage}>{this.props.language}</span>
          </div>

          <div className={this.getClassNameHamburger()} onClick={this.toggleMenu}>
            <span></span>
          </div>

          <div className={style.menuBlock} style={{opacity: this.state.toggleMenu ? 1 : 0}}>
            {this.state.toggleMenu && <Menu 
              pageNames={this.props.pageNames}
              language={this.props.language}
              screenSize={this.props.screenSize}
              goToAim={this.goToAim}
              currentPage={this.props.currentPage}
            />}
          </div>

        </div>

        <div className={style.markerBlock}>
          <div className={style.steakBlock}>
            {this.getStacks()}
          </div>
        </div>
    </div>

    );
  }
}

  