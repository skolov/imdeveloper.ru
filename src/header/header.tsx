import React from 'react';
import style from './header.module.scss';

type headerProps = {
  pageNames: string[],
  language: string
}

const TEXT = {
  ru : 'Меня зовут Синицын Максим Александрович, я web-разработчик. Занимаюсь разработкой web-интерфейсов различной сложности, версткой лендингов, адаптивных и мобильных версий сайтов.',
  en : 'My name is Sinitsyn Maxim Alexandrovich, I am a web developer. I am engaged in the development of web-interfaces of varying complexity, making of the landings, adaptive and mobile versions of sites.'
}


const Header = ({pageNames, language}: headerProps) => {
  return (
    <div className={style.header} id={pageNames[0]}>
      <div className={style.mainBoard}>

        <h1 className={style.title}>{language === 'ru' ? pageNames[1] : pageNames[0]}</h1>

        <div className={style.centerBoard}>
          <div className={style.board}>
            <div className={style.text}>
              <h1 className={style.hello}>{language === 'ru' ? 'Привет' : 'Hello'}</h1>
              <p>
                {language === 'ru' ? TEXT.ru : TEXT.en}
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Header;