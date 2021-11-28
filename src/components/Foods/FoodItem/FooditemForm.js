import React, { useRef, useState } from 'react'
import styles from './FooditemForm.module.css'
import Input from '../../UI/Input'

const FooditemForm = ({ id, addToCartHandler }) => {

    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(amountInputRef.current.value)
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum = +enteredAmount;

        if (enteredAmount.trim().length === 0 ||
            enteredAmountNum < 1 ||
            enteredAmountNum > 5
        ) {
            setAmountIsValid(false);
            return;
        }
        addToCartHandler(enteredAmountNum);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                label='개수'
                ref={amountInputRef}
                input={{
                    id: 'amount' + id,
                    type: 'number',
                    min: '1',
                    max: '10',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button> + 추가하기</button>
            {!amountIsValid && <p>적절한 개수를 입력해주세요.</p>}
        </form>
    )
}

export default FooditemForm
