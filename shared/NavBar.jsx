import Link from "next/link"
import css from "./NavBar.module.css"

export default function NavBar(){

  const routes = [
    {href:"/",title: "Inicio"},
    {href:"/deeds",title: "Portfolio"},
    {href:"/about",title: "¿Quiénes somos?"},
    {href:"/test",title: "test"},
  ]

  return <div className={css.container}>
    { routes.map(({href, title}, index) => 
        <Link key={index} href={href}> <button> {title} </button> </Link> )
    }
  </div>
}
