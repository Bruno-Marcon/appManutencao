import React, { useState } from 'react';
import ModalNewItem from '../modal/modal';
import jsonData from '../../JsonData.json'
import ButtonTable from '../button/buttonTable/buttonTable';
import style from './tableStyle.module.css'
  
function TableData() {
  // const [EquipmentData, setEquipmentData] = useState(jsonData);
  
  // const tableRows = EquipmentData.map((info) => {
  //   return(
  //       <><td>{info.id}</td><td>{info.equip}</td><td>{info.marca}</td><td>{info.model}</td><td>{info.sn}</td><ButtonTable /></>
  //   )
  // })
  
  // const addRows = (data) => {
  //   const totalEquipment = EquipmentData.length;
  //   data.id = totalEquipment + 1;
  //   const updatedEquipmentData = [...EquipmentData];
  //   updatedEquipmentData.push(data);
  //   setEquipmentData(updatedEquipmentData);
  // };
  
  return (
      <table className={style.table}>
        <thead>
          <tr>
            <th className={style.id}>ID</th>
            <th className={style.th}>Equipamento</th>
            <th className={style.th}>Marca</th>
            <th className={style.th}>Modelo</th>
            <th className={style.th}>Quantidade</th>
            <th className={style.th}>Ações</th>     
          </tr>
        </thead>
      </table>
  );
}
  
export default TableData;

