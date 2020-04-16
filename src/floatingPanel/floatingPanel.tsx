import React from 'react';
import style from './floatingPanel.module.scss';
import LeftBoard from './leftBoard/leftBoard';
import RightBoard from './rightBoard/rightBoard';




class FloatingPanel extends React.Component<any, any>  {



  getPropertyCSSLeft = (): number => {
    let left = this.props.screenSize.width < 1200 ? -this.props.screenScroll.XOffset : (this.props.screenSize.width - 1214)/2;
    return left
  }



  getPropertyCSSInvert = (): string => {
    let filter = this.props.screenScroll.YOffset > (this.props.screenSize.height * 2) ?  'invert(1)' : 'none' ;
    return filter
  }

  

  public render() {
    return (
      <div className={style.floatingPanel} style={{left: this.getPropertyCSSLeft(), filter: this.getPropertyCSSInvert()}}>
        <LeftBoard 
          currentPage={this.props.currentPage}
          pageNames={this.props.pageNames}
          language={this.props.language}
        />
        <RightBoard 
          currentPage={this.props.currentPage}
          screenSize={this.props.screenSize}
          pageNames={this.props.pageNames}
          language={this.props.language}
          changeLanguage={this.props.changeLanguage}
        />
      </div>
    );
  }
}

export default FloatingPanel;
  