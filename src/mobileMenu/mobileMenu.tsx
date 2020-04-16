import React, { CSSProperties } from 'react';
import style from './mobileMenu.module.scss';


const ACTIVE: CSSProperties = {
  marginLeft: "5px",
  opacity: '1'
};


const TURNEDOFF: CSSProperties = {
  marginLeft: "0",
  opacity: '.3'
}



export default class MobileMenu extends React.Component<any, any>  {




  state:{
    toggleMenu: boolean
  } = {
    toggleMenu: false
  }




  getClassNameHamburger = (): string => {
    return !this.state.toggleMenu ? style.menuBtn : style.menuBtn + ' ' + style.menuBtnOpen;
  }




  getMenuItem = ():JSX.Element[] => {
    let items:JSX.Element[] = []; 
    for (let index = 0; index < 4; index++){
      let style = index === this.props.currentPage ? ACTIVE : TURNEDOFF;
      items.push(
        <li style={style} key={index} onClick={() => {this.goToAim(this.props.pageNames.en[index])}}>
          {this.props.language === 'ru' ? this.props.pageNames.ru[index] : this.props.pageNames.en[index]}
        </li>
        )
    }
    return items;
  }




  goToAim = (page: string): void => {
    let elem = document.getElementById(page);
    elem?.scrollIntoView({block: "center", behavior: "smooth"});
    this.setState({
      toggleMenu: false
    })
  }




  toggleMenu = (): void => {
    this.setState((prevstate: any) => ({ toggleMenu: !prevstate.toggleMenu}))
  }


  

  public render() {
    return (
      <div className={style.mobileMenu}>
        <div className={this.getClassNameHamburger()} onClick={this.toggleMenu}>
          <span></span>
        </div>
        {this.state.toggleMenu && <div className={style.menu}>
            <div className={style.menuAligns}>
              <ul>
                {this.getMenuItem()}
              </ul>
            </div>
            <div className={style.language} onClick={this.props.changeLanguage}>
              {this.props.language === 'ru' ? 'ru' : 'en'}
            </div>
          </div>}
      </div>
    );
  }

}

  