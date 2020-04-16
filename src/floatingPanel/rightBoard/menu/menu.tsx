import React, {CSSProperties} from 'react';
import style from './menu.module.scss'


const ACTIVE: CSSProperties = {
  marginLeft: "5px",
  opacity: '1'
};


const TURNEDOFF: CSSProperties = {
  marginLeft: "0",
  opacity: '.3'
}


export default class Menu extends React.Component<any, any>  {


  getMenuItem = ():JSX.Element[] => {
    let items:JSX.Element[] = [];
    for (let index = 0; index < 4; index++){
      let style = index === this.props.currentPage ? ACTIVE : TURNEDOFF;
      items.push(
        <li style={style} key={index} onClick={() => {this.props.goToAim(this.props.pageNames.en[index])}}>
          {this.props.language === 'ru' ? this.props.pageNames.ru[index] : this.props.pageNames.en[index]}
        </li>
        )
    }
    return items;
  }


  public render() {
    return (
      <div className={style.menu}>
        <ul>
          {this.getMenuItem()}
        </ul>
      </div>
    );
  }
}

  