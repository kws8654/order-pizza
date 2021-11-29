import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import styles from './AvailableFood.module.css';
import FoodItem from './FoodItem/FoodItem';

const AvailableFood = () => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetchFoodHandler();
  }, []);

  async function fetchFoodHandler() {
    const res = await fetch(
      'https://react-practice-9b279-default-rtdb.firebaseio.com/foods.json'
    );
    if (!res.ok) {
      throw new Error('Error occured');
    }
    const resData = await res.json();
    const loadedFoods = [];

    for (const key in resData) {
      loadedFoods.push({
        id: key,
        name: resData[key].name,
        desc: resData[key].desc,
        price: resData[key].price,
      });
    }
    try {
      setFoods(loadedFoods);
    } catch (error) {
      setIsLoading(false);
      setHttpError(error.message);
    }
    setIsLoading(false);
  }

  return (
    <section className={styles.foods}>
      <Card>
        <ul>
          {isLoading && <p className={styles.loading}>로딩 중 입니다.</p>}
          {!isLoading &&
            foods.map((food) => (
              <FoodItem
                id={food.id}
                key={food.id}
                name={food.name}
                desc={food.desc}
                price={food.price}
              />
            ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableFood;
