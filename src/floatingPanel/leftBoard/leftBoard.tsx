import React from 'react';
import style from './leftBoard.module.scss';


export default class LeftBoard extends React.Component<any, any>  {



  getPageName = (): string => {
    return this.props.language === 'ru' ? 
      this.props.pageNames.ru[this.props.currentPage] : this.props.pageNames.en[this.props.currentPage]
  }



  public render() {
    return (
      <div className={style.leftBoard}>
          <div className={style.board}>
            <div className={style.toper}>
              {this.props.language === 'ru' ? 'сколов' : 'skolov'}
            </div>
            <div className={style.title}>
              <div className={style.pagePosition}>0{this.props.currentPage + 1}</div>
              <div className={style.text}>
                <div className={style.headerPage}>
                  {this.getPageName()}
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

}
  