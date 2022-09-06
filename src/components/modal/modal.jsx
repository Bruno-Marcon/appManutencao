import style from './modalStyle.module.css'

const ModalNewItem = ({setShowModal}) =>{
  return(
    <div className={style.overlay}> 
      <form className={style.formModal}>
        <h1 className={style.title}>Equipamentos</h1>
        <div className={style.gap}>
          <label>Nome do Equipamento:</label>
          <input className={style.input} type="text" id='nomeEquipamento'/>
        </div>
        <div className={style.gap}>
          <label>Marca:</label>
          <input className={style.input} type="text"/>
        </div>
        <div className={style.gap}>
          <label>Modelo:</label>
          <input className={style.input} type="text"/>
        </div>
        <div className={style.gap}>
          <label>Quantidade:</label>
          <input className={style.input} type="text"/>
        </div>
        <button className="buttonAdd" onClick={()=> setShowModal(false)}>
          Adicionar
        </button>
      </form>
    </div>
  )
}
export default ModalNewItem