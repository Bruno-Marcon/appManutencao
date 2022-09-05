import style from './contentStyle.module.css'

const Content = () =>{
  return(
    <div className={style.content}>
      <div className={style.layer1}>
        <div className={style.wrapItens}>
          <div className={style.space}>
            <h1 className={style.title}>Cadastro de Equipamentos</h1>
          </div>
          <div className={style.space2}>
          <button className={style.setupButton}>
            Agendamentos
            <span className={style.spanSpace} ></span>
          </button>
          </div>
          <div className={style.content}>
            <div className={style.menuHori}>
              <div className={style.menuItens}>
                <div className={style.flexItens}>
                  <button className={style.buttonMenu}>
                    Equipamento
                    <span className={style.spanSpaceColor}/>
                  </button>
                  <button className={style.buttonMenu}>
                    Marca
                    <span className={style.spanSpaceColor}/>
                  </button>
                  <button className={style.buttonMenu}>
                    Modelo
                    <span className={style.spanSpaceColor}/>
                  </button>
                  <span className={style.spanUnderline}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content