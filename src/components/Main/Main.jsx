import React from 'react';
import style from './Main.module.css'

const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
          <div className={style.greeting}>
              <span>Привет!</span>
              <span>Меня зовут Роман Макаревич</span>
              <span>Я front-end разработчик</span>
          </div>
          <div className={style.photo}></div>
      </div>
    </div>
  );
};

export default Main;
