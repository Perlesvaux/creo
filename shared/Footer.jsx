import css from './Footer.module.css'
export default function Footer(){

  return <> 
    <hr className={css.division} />
    <footer className={css.container}>
    <h2>CREO Agencia Digital</h2>
    <div>8 YEARS | Unstoppable Creativity! Hablemos de tu marca, el café va por nosotros. ☕</div>
    <div> <a href="mailto:creoagenciadigital@gmail.com">creoagenciadigital@gmail.com</a></div>
    <div> © 2025 CREO. Todos los derechos reservados </div>
  </footer></> 

}
