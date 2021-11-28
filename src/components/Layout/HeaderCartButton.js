import React, { useContext, useEffect, useState } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/CartContext';

const HeaderCartButton = ({ showCart }) => {
  const [btnIsBump, setBtnIsBump] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const totalCartItems = items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const buttonStyles = `${styles.button} ${btnIsBump ? styles.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsBump(true);
    const timer = setTimeout(() => {
      setBtnIsBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonStyles} onClick={showCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>장바구니</span>
      <span className={styles.badge}>{totalCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
