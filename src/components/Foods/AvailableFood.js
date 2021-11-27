import React from 'react'
import Card from '../UI/Card';
import styles from './AvailableFood.module.css'
import FoodItem from './FoodItem/FoodItem';

const AvailableFood = () => {

    const dummyFoods = [
        {
            id: 'm1',
            name: '페퍼로니 피자',
            desc: '페퍼로니가 가득',
            price: 15000
        },
        {
            id: 'm2',
            name: '포테이토 피자',
            desc: '감자와 베이컨이 토핑으로',
            price: 16000
        },
        {
            id: 'm3',
            name: '바베큐 치킨 윙',
            desc: '최고의 바베큐 소스로 만든 닭날개',
            price: 8000
        },
        {
            id: 'm4',
            name: '웻지 감자',
            desc: '푸짐한 양의 감자',
            price: 6000
        },
    ];


    return (
        <section className={styles.foods}>
            <Card>
                <ul>
                    {dummyFoods.map(food => <FoodItem id={food.id} key={food.id} name={food.name} desc={food.desc} price={food.price} />)}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableFood
