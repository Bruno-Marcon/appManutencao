// import React, { useState } from 'react';
// import style from './tableStyle.module.css'

// function EquipmentForm(props) {
//   const [equip, setEquip] = useState('');
//   const [marca, setMarca] = useState('');
//   const [model, setModel] = useState('');
//   const [sn, setSn] = useState('');
  
//   const changeEquip = (event) => {
//     setEquip(event.target.value);
//   };
  
//   const changeMarca = (event) => {
//     setMarca(event.target.value);
//   };
//   const changeModel = (event) => {
//     setModel(event.target.value);
//   };
//   const changeSn = (event) => {
//     setSn(event.target.value);
//   };
  
//   const transferValue = (event) => {
//     event.preventDefault();
//     const val = {
//       equip,
//       marca,
//       model,
//       sn,
//     };
//     props.func(val);
//     clearState();
//   };
  
//   const clearState = () => {
//     setEquip('');
//     setMarca('');
//     setModel('');
//     setSn('');
//   };
//   return (
//     <div>
//       <label>Name</label>
//       <input type="text" value={name} onChange={changeName} />
//       <label>City</label>
//       <input type="text" value={city} onChange={changeCity} />
//       <button onClick={transferValue}> Click Me</button>
//     </div>
//   );
// }
  
// export default EquipmentForm;











// class Produto{
//   constructor(){
//     this.id='1',
//     this.arrayEquipamentos = []
//   }
//   lerDados(){
//     let equipamento = []
//     equipamento.id = this.id;
//     equipamento.equip = document.getElementById('modalEquipamento').value
//     equipamento.modelo = document.getElementById('modalModelo').value
//     equipamento.marca = document.getElementById('modalMarca').value
//     equipamento.sn = document.getElementById('modalSn').value
//     return equipamento
//     console.log(this.arrayEquipamentos)
//   }
//   adicionar(){
   
//     this.adicionar(this.lerDados())
//     this.listarTabela()
//   }
//   incluir(equipamento){
//     this.arrayEquipamentos.push(equipamento)
//     this.id++
//   }
//   listarTabela(){
//     let tbody = document.getElementById('tbody')

//     for(let i = 0; i<this.arrayEquipamentos.length; i++){
//       let ts = tbody.insertRow()

//       let td_id = tr.insertCell()
//       let td_equipamento = tr.insertCell()
//       let td_modelo = tr.insertCell()
//       let td_marca = tr.insertCell()
//       let td_sn = tr.insertCell()
//       let td_acoes = tr.insertCell()

//       td_id.innerText = this.arrayEquipamentos[i].id
//       td_equipamento.innerText = this.arrayEquipamentos[i].equip
//       td_modelo.innerText = this.arrayEquipamentos[i].modelo
//       td_marca.innerText = this.arrayEquipamentos[i].marca
//       td_sn.innerText = this.arrayEquipamentos[i].sn
//       td_acoes.innerText = this.arrayEquipamentos[i].acoes

//     }
//   }
//   validaCampos(equipamento){
//     let msg = ''

//     if(equipamento.equip == ''){
//       msg += '- Informe o nome do equipamento\n'
//     }
//     if(equipamento.modelo == ''){
//       msg += '- Informe o modelo do equipamento\n'
//     }
//     if(equipamento.marca == ''){
//       msg += '- Informe a marca do equipamento\n'
//     }
//     if(equipamento.sn == ''){
//       msg += '- Informe o númere de série do equipamento\n'
//     }
//     if(msg != ''){
//       alert(msg)
//       return false
//     }
//     return true
//   }

// }
// export default Produto
