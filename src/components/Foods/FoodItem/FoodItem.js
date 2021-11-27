import React from 'react'
import style from './FoodItem.module.css'
import FooditemForm from './FooditemForm'

const FoodItem = ({ id, name, desc, price }) => {
    return (
        <li className={style.food}>
            <div>
                <div><h3>{name}</h3></div>
                <div className={style.desc}>{desc}</div>
                <div className={style.price}>{price}원</div>
            </div>
            <div>
                <FooditemForm id={id} />
            </div>
        </li>
    )
}

export default FoodItem
