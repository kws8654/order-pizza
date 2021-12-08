import React from 'react';
import styles from './FoodsSummary.module.css';

const FoodsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>'맛있는 피자를 빠르게 받아보세요!'</h2>
      <p>지금 바로 배달가능한 메뉴를 선택하고 주문해보세요. </p>
      <p>
        저희의 모든 음식은 질 좋은 재료로 주문과 함께 조리합니다. 직접 손으로
        빚은 도우 위에 자체 개발 토마토 소스, 최고급 모짜렐라 치즈까지!
        정성스럽게 석쇠 오븐에 구운 따뜻하고 맛있는 피자 한 조각을 드셔보세요!
      </p>
    </section>
  );
};

export default FoodsSummary;
