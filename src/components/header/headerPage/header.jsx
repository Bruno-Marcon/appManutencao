import style from './headerStyle.module.css'

const HeaderPage = () =>{
  return(
    <header className={style.header}>
      <div className={style.layer1}>
        <div className={style.wrapItens}>
          <div className={style.interDiv}>
            {/* Button para resposiveidade do menu */}
            {/* <button className={style.hidButton}>
            <svg className={style.svg2} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </button> */}
          </div>
          <div className={style.space}></div>
          <div className={style.wrap}>
            <a className={style.ancora} href="#">Anotações</a>
          </div>
          <div className={style.wrap}>
            <button className={style.iconsButton}>
            <svg
              className={style.svg2} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 448 512">
              <path 
                d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
              <span className={style.spanSpace}/>
            </button>
          </div>
          <div className={style.wrap}>
            <button className={style.avatarButton}>
              <div className={style.avatar}>
                <picture>
                  <img alt="Avatar" />
                </picture>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderPage