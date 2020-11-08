import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.css';

const Nav = () => (
  <div>
    <Link to="/home" className={styles.link} style={{ marginRight: '10px' }}>
      Home
    </Link>
    <Link to="/about" className={styles.link}>
      About
    </Link>
  </div>
);

export default Nav;
