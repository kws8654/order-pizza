import React from 'react'
import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = ({ showCart }) => {
    return (

        <button className={styles.button} onClick={showCart}>
            <span className={styles.icon}><CartIcon /></span>
            <span>장바구니</span>
            <span className={styles.badge}>3</span>
        </button>

    )

}

export default HeaderCartButton
