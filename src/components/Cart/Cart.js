import React, { useContext } from 'react';
import { Modal } from '../UI/Modal';
import styles from './Cart.module.css';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';

const Cart = ({ hideCart }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount}원`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={styles.cartItems}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal hideCart={hideCart}>
      {cartItems}
      <div className={styles.total}>
        <div>주문 내역</div>
        <div>{totalAmount}</div>
      </div>
      <div className={styles.actions}>
        <button className={styles.buttonAlt} onClick={hideCart}>
          닫기
        </button>
        {hasItems && <button className={styles.button}>주문</button>}
      </div>
    </Modal>
  );
};

export default Cart;
