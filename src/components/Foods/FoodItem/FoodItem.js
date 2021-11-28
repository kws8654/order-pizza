import React from 'react'
import style from './FoodItem.module.css'
import FooditemForm from './FooditemForm'
import { useContext } from 'react'
import CartContext from '../../../store/CartContext'

const FoodItem = ({ id, name, desc, price }) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price
        });
    }
    return (
        <li className={style.food}>
            <div>
                <div><h3>{name}</h3></div>
                <div className={style.desc}>{desc}</div>
                <div className={style.price}>{price}원</div>
            </div>
            <div>
                <FooditemForm id={id} addToCartHandler={addToCartHandler} />
            </div>
        </li>
    )
}

export default FoodItem
