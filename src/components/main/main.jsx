import style from './mainStyle.module.css'
import HeaderSearch from '../header/headeSearch/headerSearch'
import TableList from '../table/table'
import ModalNewItem from '../modal/modal'
import { useState } from 'react'

const Main = () =>{

  const[showModal, setShowModal] = useState(false)

  return(
    <main className={style.main}>
      <div className={style.panel1}>
        <HeaderSearch setShowModal={setShowModal}/>
        <div className={style.table}>
         <TableList/>
         {showModal ? (
              <ModalNewItem setShowModal={setShowModal}/>
            ) : null}
        </div>
      </div>
  </main>
  )
}
export default Main