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




  //return <footer className={css.siteFooter}>
  //    <div className={css.footerColWrapper}>
  //      <h2 className={css.footerHeading}>CREO</h2>
  //      <div className={css.footerCol}>
  //        <p>© 2025 CREO Agencia Digital. All rights reserved.</p>
  //      </div>
  //      <div className={css.footerCol}>
  //        <ul className={css.socialMediaList}>
  //          <li><a href="https://github.com/yourusername">GitHub</a></li>
  //          <li><a href="https://twitter.com/yourusername">Twitter</a></li>
  //        </ul>
  //      </div>
  //    </div>
  //  </footer>
