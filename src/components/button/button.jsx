import React from 'react';
import style from './buttonStyle.module.css'

const ButtonAddItem = () => {
  return (
      <div className={style.layer2}>
            <button className={style.setupButtonNew}>
              Novo
              <span className={style.spanSpace}/>
            </button>
          </div>
  );
};

// const addItem = ({ onChange, value }) => {
//   return (
//       <div className={style.layer2}>
//             <button className={style.setupButtonNew} value={value} onChange={onChange}>
//               Novo
//               <span className={style.spanSpace}/>
//             </button>
//           </div>
//   );
// };

export default ButtonAddItem;