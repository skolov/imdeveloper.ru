import React from 'react';
import style from './document.module.scss';



const QUEST = {
  'ru' : [
    'Мобильный телефон:',
    'Эл. почта:',
    'Возраст:',
    'Проживание:',
    'Зарплатные ожидания:',
    'Гражданство:',
    'Языки:',
    'Образование:',
  ],
  'en' : [
    'Mobile phone:',
    'Email:',
    'Age:',
    'Residence:',
    'Salary expectations:',
    'Citizenship',
    'Languages:',
    'Education:',
  ]
}



const ANSWER = {
  'ru' : [
    '+7(952)-733-95-05',
    'skolov.mark@bk.ru',
    '04.02.1997 (23 года)',
    'Россия, Екатеринбург',
    '40 000 руб.',
    'Российская Федерация',
    'Русский, английский (B2)',
    'Высшее, законченное. Уральский Федеральный Университет. Направление (специальность): Информационная безопасность.'
  ],
  'en' : [
    '+7(952)-733-95-05',
    'skolov.mark@bk.ru',
    '04.02.1997 (23 года)',
    'Russia, Yekaterinburg',
    '40 000 руб.',
    'Russian Federation',
    'Russian, English (B2)',
    'Higher completed. Ural Federal University. Specialty: Information Security.'
  ]
}



const TEXT_1 = {
  'ru' : [
    'Уверенные знания HTML, CSS, JS. Навык адаптивной верстки проектов с нуля. Основной используемый стек технологий: React, TypeScript, SCSS (SASS), Git, менеджер пакетов (NPM) из состава Node.js на операционной системе Linux. Возможен быстрый переход на смежные технологии (Vue.js, Angular и т.д.)'
  ],
  'en' : [
    'Assured knowledge of HTML, CSS, JS. Skill of adaptive making of projects from the beginning. The main stack of technologies used are: React, TypeScript, SCSS (SASS), Git, the package manager (NPM) from Node.js on the Linux operating system. A quick transition to related technologies (Vue.js, Angular, etc.) is possible.'
  ]
}


const TEXT_2 = {
  'ru' : [
    'Фриланс с 2018 по настоящее время.'
  ],
  'en' : [
    'Freelance from 2018 to the present.'
  ]
}



export default class Document extends React.Component<any, any>  {




  getPlate = () => {
    let answer: string[] = this.props.language === 'ru' ? ANSWER.ru : ANSWER.en,
        quest: string[] = this.props.language === 'ru' ? QUEST.ru : QUEST.en,
        index: number = 0;

    return quest.map((elem: string) => {
      let i = index++;
      return (
        <div className={style.oneItem} key={i}>
          <div className={style.oneItemHalf}><b>{elem}</b></div>
          <div className={style.oneItemHalf}>{answer[i]}</div>
        </div>
      )
    })
  }



  public render() {
    return (
      <div className={style.document} id={this.props.pageNames[0]}>

        <div className={style.mainBoard}>
          <div className={style.centerBoard}>
            <h1>{this.props.language === 'ru' ? this.props.pageNames[1] : this.props.pageNames[0]}</h1>
            <div className={style.sheet}>

              <div className={style.header}>
                {this.props.language === 'ru' ? 'Синицын Максим Александрович' : 'Sinitsyn Maxim Alexandrovich'} 
              </div>

              <div className={style.plateCard}>
                {this.getPlate()}
              </div>

              <div className={style.smallHeader}>
                {this.props.language === 'ru' ? 'Ключевые навыки:' : 'Key skills:'}  
              </div>

              <div className={style.textPlate}>
                {this.props.language === 'ru' ? TEXT_1.ru : TEXT_1.en}
              </div>

              <div className={style.smallHeader}>
                {this.props.language === 'ru' ? 'Опыт работы:' : 'Work experience:'}
              </div>

              <div className={style.textPlate}>
                {this.props.language === 'ru' ? TEXT_2.ru : TEXT_2.en}  
              </div>

            </div>
          </div>
        </div>

      </div>
    );
  }

}
