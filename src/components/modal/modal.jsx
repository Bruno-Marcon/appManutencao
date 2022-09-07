import style from './modalStyle.module.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from 'react';

function ModalNewItem ({setShowModal}){

  const [equip, setEquip] = useState('');
  const [marca, setMarca] = useState('');
  const [model, setModel] = useState('');
  const [sn, setSn] = useState('');
  
  const changeEquip = (e) => {
    equip[e.target.valeu] = e.target.value
    setEquip(equip);
  };
  const changeMarca = (e) => {
    marca[e.target.valeu] = e.target.value
    setMarca(marca);
  };
  const changeModel = (e) => {
    model[e.target.valeu] = e.target.value
    setModel(model);
  };
  const changeSn = (e) => {
    sn[e.target.valeu] = e.target.value
    setSn(sn);
  };
  
  const transferValue = (e) => {
    e.preventDefault();
    const val = {
      equip,
      marca,
      model,
      sn,
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setEquip('');
    setMarca('');
    setModel('');
    setSn('');
  }
  
  return(
    <div className={style.overlay}> 
      <Box component="form" className={style.formModal}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off">
        <h1 className={style.title}>Equipamentos</h1>
        <div className={style.space}>
          <TextField fullWidth label="Equipamento" value={equip} onChange={changeEquip} id="modalEquipamento" />
        </div>
        <div className={style.space}>
          <TextField fullWidth label="Marca" value={marca} onChange={changeMarca} id="modalMarca" />
        </div>
        <div className={style.space}>
          <TextField fullWidth label="Modelo" value={model} onChange={changeModel} id="modalModelo" />
        </div>
        <div className={style.space}>
          <TextField type='text' fullWidth label="Numero de Série" value={sn} onChange={changeSn} id="modalSn" />
        </div>
        <div className={style.space}>
        <Button className="buttonAdd" variant="contained" onClick={() =>{
          setShowModal(false)
          transferValue
            }
          }
             >
            Adicionar
          </Button>
        </div>
        </Box>
    </div>
  )
}

export default ModalNewItem