import React from 'react';
// support css modules
import styles from './home.module.less';
import avatar from '../assets/avatar.png';
import todo from '../assets/todo.png';

import { asyncPrint } from '../utils';

const Home = () => {
  const handleClick = () => {
    window.alert('clicked');
    setTimeout(() => {
      console.log('test es6');
    }, 2000);
  };

  asyncPrint();

  return (
    <div className={styles.home}>
      <button className={styles.btn} onClick={handleClick}>
        click me
      </button>
      <div>
        <img src={avatar} width="64" height="64" alt="logo" />
        <img src={todo} />
      </div>
    </div>
  );
};

export default Home;
