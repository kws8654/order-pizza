import React, { useRef, useState } from 'react';
import styles from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isNumLength = (value) => value.trim().length < 10;

const Checkout = ({ hideCart, totalAmount, submitOrder }) => {
  const [formInputValidity, setFormInputValiditytate] = useState({
    address: true,
    number: true,
    require: true,
  });

  const addressInputRef = useRef();
  const numberInputRef = useRef();
  const requireInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredAddress = addressInputRef.current.value;
    const enteredNumber = numberInputRef.current.value;
    const enteredRequire = requireInputRef.current.value;

    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredNumberIsValid = !isNumLength(enteredNumber);
    const enteredRequireIsValid = !isEmpty(enteredRequire);

    setFormInputValiditytate({
      address: enteredAddressIsValid,
      number: enteredNumberIsValid,
      require: enteredRequireIsValid,
    });

    const formIsValid =
      enteredAddressIsValid && enteredNumberIsValid && enteredRequireIsValid;

    if (!formIsValid) {
      return;
    }
    submitOrder({
      address: enteredAddress,
      number: enteredNumber,
      require: enteredRequire,
    });
  };
  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div
        className={`${styles.control} ${
          formInputValidity.address ? '' : styles.invalid
        }`}
      >
        <label htmlFor='address'>주소</label>
        <input type='text' id='address' ref={addressInputRef} />
        {!formInputValidity.address && <p>주소를 입력해주세요.</p>}
      </div>
      <div
        className={`${styles.control} ${
          formInputValidity.number ? '' : styles.invalid
        }`}
      >
        <label htmlFor='number'>번호</label>
        <input
          type='text'
          id='number'
          ref={numberInputRef}
          placeholder='( - ) 없이 입력해주세요'
        />
        {!formInputValidity.number && <p>번호를 입력해주세요.</p>}
      </div>
      <div
        className={`${styles.control} ${
          formInputValidity.require ? '' : styles.invalid
        }`}
      >
        <label htmlFor='require'>요청사항</label>
        <input type='text' id='require' ref={requireInputRef} />
        {/* {!formInputValidity.require && <p>주소를 입력해주세요!</p>} */}
      </div>
      <div className={styles.total}>
        <div>총 결제 금액</div>
        <div>{totalAmount}</div>
      </div>
      <div className={styles.actions}>
        <button type='button' onClick={hideCart}>
          취소
        </button>
        <button className={styles.submit}>확인</button>
      </div>
    </form>
  );
};

export default Checkout;
