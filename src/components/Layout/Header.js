import React from 'react';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ showCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>PIZZA HOUSE</h1>
        <HeaderCartButton showCart={showCart} />
      </header>
      <div className={styles.mainImage}>
        <img src='./images/meals.jpeg' alt='Table' />
      </div>
    </>
  );
};

export default Header;
