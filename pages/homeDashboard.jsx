import Content from "../src/components/content/content";
import AsideMenu from "../src/components/menu/asideMenu";
import style from "../styles/Home.module.css"
import HeaderPage from "../src/components/header/headerPage/header";
import Main from "../src/components/main/main"

export default function HomeDashboard() {
  return (
    <div className={style.boxRoot}>
      <AsideMenu/>
      <div className={style.headerConfig}>
        <HeaderPage/>
        <Content/>
        <Main/>
      </div>
    </div>
  )
}