import style from './mainStyle.module.css'
import HeaderSearch from '../header/headeSearch/headerSearch'
import TableList from '../table/table'

const Main = () =>{
  return(
    <main className={style.main}>
      <div className={style.panel1}>
        <HeaderSearch/>
        <div className={style.table}>
         <TableList/>
        </div>
      </div>
  </main>
  )
}
export default Main