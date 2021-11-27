import React from 'react'
import styles from './FoodsSummary.module.css'

const FoodsSummary = () => {
    return (
        <section className={styles.summary}>
            <h2>맛있는 음식을 신속하고 신속하게!</h2>
            <p>지금 바로 배달가능한 음식을 선택하고 주문해보세요. </p>
            <p>저희의 모든 음식은 질 좋은 재료로 주문 즉시 조리시작됩니다. 따듯하고 맛있는 한 끼를 드셔보세요!</p>
        </section>
    )
}

export default FoodsSummary
