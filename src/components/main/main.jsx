import style from './mainStyle.module.css'
import HeaderSearch from '../header/headeSearch/headerSearch'
import ModalNewItem from '../modal/modal'
import { useState } from 'react'
import TableData from '../table/lineTable'

const Main = () =>{

  const[showModal, setShowModal] = useState(false)

  return(
    <main className={style.main}>
      <div className={style.panel1}>
        <HeaderSearch setShowModal={setShowModal}/>
        <div className={style.table}>
         <TableData/>
         {showModal ? (
              <ModalNewItem setShowModal={setShowModal}/>
            ) : null}
        </div>
      </div>
  </main>
  )
}
export default Main