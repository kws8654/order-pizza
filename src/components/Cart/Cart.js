import React from 'react'
import { Modal } from '../UI/Modal';
import styles from './Cart.module.css'

const Cart = ({ hideCart }) => {
    const cartItems = <ul className={styles.cartItems}>{[
        { id: 'c1', name: '스시', amount: '2', price: '6000원' },
    ].map((item) => <li>{item.name}</li>)}</ul>;

    return (
        <Modal hideCart={hideCart}>
            {cartItems}
            <div className={styles.total}>
                <div>주문 내역</div>
                <div>6000원</div>
            </div>
            <div className={styles.actions}>
                <button className={styles.buttonAlt} onClick={hideCart}>닫기</button>
                <button className={styles.button}>주문</button>
            </div>
        </Modal>
    )
}

export default Cart
