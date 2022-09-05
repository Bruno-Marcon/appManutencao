import style from './modalStyle.module.css'


const ModalNewItem = ({setShowModal}) =>{
  return(
      <form className={style.formModal}>
        <div>
          <label>Nome do Equipamento:</label>
          <input type="text"/>
        </div>
        <div>
          <label>Marca:</label>
          <input type="text"/>
        </div>
        <div>
          <label>Modelo:</label>
          <input type="text"/>
        </div>
        <div>
          <label>Quantidade:</label>
          <input type="text"/>
        </div>
        <button className="buttonAdd" onClick={()=> setShowModal(false)}>
          Adicionar
        </button>
      </form>
  )
}
export default ModalNewItem