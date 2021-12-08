import React, { useContext, useState } from 'react';
import { Modal } from '../UI/Modal';
import styles from './Cart.module.css';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = ({ hideCart }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount}원`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    const res = await fetch(
      'https://react-practice-9b279-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
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
  const cartModalContent = (
    <>
      {cartItems}
      {isCheckout && (
        <Checkout
          hideCart={hideCart}
          totalAmount={totalAmount}
          submitOrder={submitOrderHandler}
        />
      )}
      {!isCheckout && (
        <div className={styles.actions}>
          <button className={styles.buttonAlt} onClick={hideCart}>
            닫기
          </button>
          {hasItems && (
            <button className={styles.button} onClick={orderHandler}>
              주문
            </button>
          )}
        </div>
      )}
    </>
  );

  const submittingModalContent = (
    <p className={styles.orderInfo}>주문 처리 중입니다</p>
  );

  const submitedModalContent = (
    <>
      <p className={styles.orderInfo}>주문 완료</p>
      <div className={styles.actions}>
        <button className={styles.button} onClick={hideCart}>
          닫기
        </button>
      </div>
    </>
  );

  return (
    <Modal hideCart={hideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && submittingModalContent}
      {!isSubmitting && didSubmit && submitedModalContent}
    </Modal>
  );
};

export default Cart;
