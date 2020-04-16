import React from 'react';
import './App.scss';


import MobileMenu from './mobileMenu/mobileMenu';
import Steaky from './steaky/steaky';
import Fixed from './fixed/fixed';
import Header from './header/header';
import Document from './document/document';
import FloatingPanel from './floatingPanel/floatingPanel';



const PAGENAME = {
  'ru' : [
    'предисловие',
    'знания',
    'примеры',
    'резюме'
  ],
  'en' : [
    'introduction',
    'knowledge',
    'instance',
    'resume'
  ]
}


export default class App extends React.Component<any, any> {


    
  state: {
    screenSize: {width: number, height: number},
    screenOffset: {XOffset: number, YOffset: number},
    currentPage: number,
    language: string
  } = {
    screenSize: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    screenOffset: {
      XOffset: window.pageXOffset,
      YOffset: window.pageYOffset
    },
    currentPage: 0,
    language: 'en'
  };



  getScreenSize = (): void => {
    this.setState({
      screenSize: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    })
  }


  getScreenScroll = (): void => {
    this.setState({
      screenOffset: {
        XOffset: window.pageXOffset,
        YOffset: window.pageYOffset
      }
    }, () => {
      this.getCurrentPage()
    })
  }




  getCurrentPage = (): void => {
    let page = Math.trunc((this.state.screenOffset.YOffset + (this.state.screenSize.height / 2)) / this.state.screenSize.height);
    this.setState({
      currentPage: page
    })
  }



  changeLanguage = (): void => {
    this.setState({
      language: this.state.language === 'ru' ? 'en' : 'ru'
    })
  }



  componentDidMount() {
    window.onresize = () => this.getScreenSize();
    window.onscroll = () => this.getScreenScroll();
    this.getCurrentPage();
  }



  public render(){
    return(
      <div className="App">

        <MobileMenu
          currentPage={this.state.currentPage}
          changeLanguage={this.changeLanguage}
          language={this.state.language}
          pageNames={PAGENAME}
        />

        <FloatingPanel 
          currentPage={this.state.currentPage} 
          screenSize={this.state.screenSize} 
          screenScroll={this.state.screenOffset}
          pageNames={PAGENAME}
          language={this.state.language}
          changeLanguage={this.changeLanguage}
        />

        <Header 
          language={this.state.language}
          pageNames={[
            PAGENAME.en[0],
            PAGENAME.ru[0]
          ]}
        />

        <Steaky
          currentSize={this.state.screenSize}
          screenScroll={this.state.screenOffset}
          currentPage={this.state.currentPage}
          language={this.state.language}
          pageNames={[
            PAGENAME.en[1],
            PAGENAME.ru[1]
          ]}
        />

        <Fixed
          language={this.state.language}
          pageNames={[
            PAGENAME.en[2],
            PAGENAME.ru[2]
          ]}
        />
        
        <Document
          language={this.state.language}
          pageNames={[
            PAGENAME.en[3],
            PAGENAME.ru[3]
          ]}
        />
      </div>
    )
  }
}
