import style from './modalStyle.module.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from 'react';
const axios = require('axios');

const ModalNewItem = ({setShowModal}) =>{

  const [equip, setEquip] = useState('')
  const [marca, setMarca] = useState('')
  const [model, setModel] = useState('')
  const [sn, setSn] = useState('')
  const [sucess, setSucess] = useState(false)
  
  const changeEquip = (e) => {
    setEquip(e.target.value)
  };
  const changeMarca = (e) => {
    setMarca(e.target.value);
  };
  const changeModel = (e) => {
    setModel(e.target.value);
  };
  const changeSn = (e) => {
    setSn(e.target.value);
  };
  // const sendForm = async(e) => {
  //   const myRequest = new Request('http://localhost:3001/cadastroEquipamento')
  //   e.preventDefault()
    // try{
    //   const response = await fetch(myRequest,{
    //     method:'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-type':'application/json'
    //     },
    //     body: JSON.stringify({equip,marca,model,sn})
    //   })
    //   const json = await response.json()
    //   console.log(body)
    //   setSucess(true)
    // }catch(err){
    //   console.log(err)
    // }
    // return false
  // }
  const handleSubmit = async(e) =>{
      const elements = {equip: equip,marca: marca, model:model, sn:sn}
      await axios({
        method:'post',
        url: 'http://localhost:3000/api/equipments',
        data: elements})
        .then(function (response){
          console.log(response)
        })
        setShowModal(false)
  }
  return(
    <div className={style.overlay}>
      {sucess && <p>Enviado com sucesso</p>}
        {!sucess && (
          <Box component="form" className={style.formModal} method='post'
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
            <Button className="buttonAdd" variant="contained" onClick={handleSubmit}
                >
                Adicionar
              </Button> 
            </div>
            </Box>
          )}
      </div>
  )
}

export default ModalNewItem