import React, { useState } from 'react';
const NewLineTable = () => {

  const [newItem, setNewItem] = useState("");

  function setNewLine({target}) {
    setNewItem(target.value);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          className={style.toDoInput}
          placeholder="Digite uma nova tarefa"
          onChange={setNewTask}
        />
        <button type="submit">
          Adicionar
        </button>
      </form>
    </div>
  )
}

      

export default NewLineTable;