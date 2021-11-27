import React from 'react'
import styles from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.hideCart} />
};

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
};

const portalEl = document.getElementById('overlays')

export const Modal = (props) => {

    return (
        <>
            {ReactDOM.createPortal(<Backdrop hideCart={props.hideCart} />, portalEl)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEl)}
        </>
    )
}
