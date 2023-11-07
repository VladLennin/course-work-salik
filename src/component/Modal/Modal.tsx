import React, {FC} from 'react';
import css from "./Modal.module.css"
interface ModalProps{
    showModal:boolean;
    closeModal:(any:any)=>any;
    children:React.ReactNode;
    withoutClose?:boolean;
}
const Modal:FC<ModalProps> = ({ showModal, closeModal,children, withoutClose }) => {
    return (
        <div className={`${css.modal} ${showModal ? css.show : css.hide}`}>
            <div className={css.modalContent}>
                {!withoutClose &&  <span className={css.close} onClick={closeModal}>&times;</span>}
                {children}
            </div>
        </div>
    );
};


export default Modal;