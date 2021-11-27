import React from 'react'
import styles from './FooditemForm.module.css'
import Input from '../../UI/Input'

const FooditemForm = ({ id }) => {
    return (
        <form className={styles.form}>
            <Input label='개수' input={{
                id: 'amount' + id,
                type: 'number',
                min: '1',
                max: '10',
                step: '1',
                defaultValue: '1'
            }} />
            <button> + 추가하기</button>
        </form>
    )
}

export default FooditemForm
