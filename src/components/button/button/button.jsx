import React from 'react';
import style from './buttonStyle.module.css'
import ModalNewItem from '../../modal/modal'
const ButtonAddItem = ({showModal,setShowModal}) => {

  return (
      <div className={style.layer2}>
            <button className={style.setupButtonNew} onClick={()=> setShowModal(true)}>
              Incluir
            </button>
            {showModal ? (
              <ModalNewItem setShowModal={setShowModal}/>
            ) : null}
          </div>
  );
};

export default ButtonAddItem;