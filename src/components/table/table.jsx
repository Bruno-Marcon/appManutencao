import style from './tableStyle.module.css'

const TableList = () =>{
  return(
    <table className={style.table}>
      <tr>
        <th className={style.id}>ID</th>
        <th className={style.th}>Equipamento</th>
        <th className={style.th}>Marca</th>
        <th className={style.th}>Modelo</th>
        <th className={style.th}>Quantidade</th>
        <th className={style.th}>Ações</th>
      </tr>
      <tr>
        <td className={style.td}></td>
        <td className={style.td}></td>
        <td className={style.td}></td>
        <td className={style.td}></td>
        <td className={style.td}></td>
        <td className={style.tdButton}>
        <button className={style.setupButtonEdit}>
            Editar
            <span className={style.spanSpace}/>
          </button>
          <button className={style.setupButtonDelete}>
            Deletar
            <span className={style.spanSpace}/>
          </button>
        </td>
      </tr>
    </table>
  )
}
export default TableList