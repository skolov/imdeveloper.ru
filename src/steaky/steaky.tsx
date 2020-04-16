import React, { CSSProperties } from 'react';
import style from './steaky.module.scss';
import MobileSteaky from './mobileSteaky/mobileSteaky';




const ICONS = {
  LEFT: [
    'url(/icons/js.png)',
    'url(/icons/vue.png)',
    'url(/icons/es.png)',
    'url(/icons/ts.png)',
    'url(/icons/react.png)',
  ],
  RIGHT: [
    'url(/icons/sp.png)',
    'url(/icons/joomla.png)',
    'url(/icons/mysql.png)',
    'url(/icons/php.png)',
    'url(/icons/wp.png)',
  ],
  BOTTOM: [
    'url(/icons/less.png)',
    'url(/icons/css.png)',
    'url(/icons/sass.png)',
    'url(/icons/html.png)',
    'url(/icons/babel.png)',
    'url(/icons/bs.png)',
    'url(/icons/git.png)',
    'url(/icons/sql.png)',
  ]
}




const leftItems = ICONS.LEFT.map((elem, index) =>
  <span key={index} style={{backgroundImage: elem}}></span>
);

const rightItems = ICONS.RIGHT.map((elem, index) =>
  <span key={index} style={{backgroundImage: elem}}></span>
);


const bottomItems = ICONS.BOTTOM.map((elem, index) =>
  <span key={index} style={{backgroundImage: elem}}></span>
);


export default class Steaky extends React.Component<any, any>  {


  private refEl: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
  

  state: {
    KAdjustment: number,
    scrollTrack: number,
    currentKAdjustment: number,
    tagglePlate: boolean
  } = {
    KAdjustment: 0,
    scrollTrack: 0,
    currentKAdjustment: 0,
    tagglePlate: false
  }
  



  getInitialParam = (): void => {
    if (this.refEl.current) {
      let child = this.refEl.current.querySelector(`.${style.viewBox}`),
          parent = this.refEl.current.parentElement;

      if(child && parent){
        let KScreen: number = this.getFuckingWidth() / this.props.currentSize.height,
            KFrame: number = (child.clientWidth - 162) / (child.clientHeight - 61),
            KAdjustment: number = KScreen > KFrame ? 
            this.getFuckingWidth() / (child.clientWidth - 162) : this.props.currentSize.height / (child.clientHeight - 61),
            scrollTrack = parent.clientHeight - this.refEl.current.clientHeight;
        this.setState({
          KAdjustment: KAdjustment,
          currentKAdjustment: KAdjustment,
          scrollTrack: scrollTrack
        })
      }
    }
  }




  scrollResizingViewBox = (): any => {
    let currentTop = this.refEl.current ? this.refEl.current.offsetTop : 0,
        newKAdjustment = this.state.KAdjustment - currentTop / this.state.scrollTrack * (this.state.KAdjustment - 1);
    this.setState({
      currentKAdjustment: newKAdjustment
    }, ()=> {
      this.showAttribute()
    })
  }




  resizeViewBox = (): CSSProperties => {
    return {transform: `matrix(${this.state.currentKAdjustment}, 0, 0, ${this.state.currentKAdjustment}, 0, 0)`}
  }




  showAttribute = (): void => {
    if (this.refEl.current) {
      this.setState({
        tagglePlate: this.refEl.current.offsetTop > (this.state.scrollTrack - 50) ? 
            true : false
      })       
    }
  }




  getFuckingWidth = (): number => {
    return Math.max(
      document.body.scrollWidth, document.documentElement.scrollWidth,
      document.body.offsetLeft, document.documentElement.offsetWidth,
      document.body.clientWidth, document.documentElement.clientWidth
    );
  }




  componentDidMount(){
    this.getInitialParam();
    window.addEventListener("scroll", this.scrollResizingViewBox, false)
    window.addEventListener("resize", () => {
      this.getInitialParam(); 
      this.scrollResizingViewBox()
    }, false)
  }




  public render() {
    return (
      <div className={style.steakyContainer} id={this.props.pageNames[0]}>
        <div ref={this.refEl} className={style.steakyDiv}>

          <div className={style.attributes} style={{opacity: this.state.tagglePlate ? 1 : 0}}>
            <div className={style.leftSide}>
              {leftItems}
            </div>
            <div className={style.rightSide}>
              {rightItems}
            </div>
            <div className={style.bottomSide}>
              {bottomItems}
            </div>
          </div>

          <div className={style.centerPlate}>
            {this.props.language === 'ru' ?
              this.props.pageNames[1] : this.props.pageNames[0]}
          </div>

          <div style={this.resizeViewBox()} className={style.viewBox}>
            <div className={style.screenView}>
              <div className={style.grady}></div>
            </div>
          </div>

          <div className={style.mobileView}>
            <MobileSteaky
              pageNames={this.props.pageNames}
              currentPage={this.props.currentPage}
              scrollTrack={this.state.scrollTrack}
              language={this.props.language }
            />
          </div>

        </div>
      </div>
    );
  }
}

  