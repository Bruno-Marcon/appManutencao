import React from 'react';
import style from './buttonStyle.module.css'

const ButtonAddItem = ({setShowModal}) => {

  return (
      <div className={style.layer2}>
            <button className={style.setupButtonNew} onClick={()=> setShowModal(true)}>
              Incluir
              <span className={style.spanSpace}/>
            </button>
            {/* {showModal ? (
              <ModalNewItem setShowModal={setShowModal}/>
            ) : null} */}
          </div>
  );
};

export default ButtonAddItem;