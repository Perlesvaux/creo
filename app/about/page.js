import { Customers } from 'shared';
import Image from 'next/image'
//import img from '../../public/location.webp'
import Here from './Here.jsx'
import Cafe from './Cafe.jsx'
import css from './page.module.css'
export default function About() {
  return <section className={css.container}>
    <div className={css.about}>
      <h1>¿Quiénes somos?</h1>
      <p>¡8 años de creatividad imparable! Creemos en el poder de las ideas. Creamos soluciones que dejan huella.
      Nuestra especialidad: destacar en un mundo lleno de ruido.
      ¿Listo para hablar de tu marca? Nosotros ponemos el café. 😉☕</p>

      <h2>Nuestra especialidad</h2>
      <p><i>Branding, Diseño Multimedia, Diseño Web y Redes Sociales</i></p>


      <h2>Contratanos</h2>
        <a href="mailto:creoagenciadigital@gmail.com" target="_blank" tabIndex="1">
          <Cafe className={css.cafe} />
        </a>

      <h2>Encuentranos</h2>
        <a href="https://www.bing.com/maps?where=San%20Salvador%2C%20San%20Salvador%201101%2C%20SV" target="_blank" rel="noopener noreferrer" tabIndex="2">
          <Here className={css.here} />
        </a>

      <Customers />
    </div>

    <hr/>
  </section>
}


        //<Image 
        //  src={img.src}
        //  width={200}
        //  height={200}
        //  alt="Map of  San Salvador, San Salvador 1101, SV" 
        //  className={css.img} />
