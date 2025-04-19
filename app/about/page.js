import Image from 'next/image'
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

      <h2>Encuentranos</h2>



  </div>
      <div className={css.map}>
          <a href="https://www.bing.com/maps?where=San%20Salvador%2C%20San%20Salvador%201101%2C%20SV" target="_blank" rel="noopener noreferrer" tabIndex="-1">
                      <img src="https://dev.virtualearth.net/REST/v1/Imagery/Map/CanvasLight/San%20Salvador,%20San%20Salvador,%201101,%20SV?key=Atn679uHwJz5qBW7Qdydz8-WNiejypvCQM1WRC94l9MtNSsBeNwHcLXzUAfFPaBr&amp" alt="Map of  San Salvador, San Salvador 1101, SV" className="org-location-map__image" />
          </a>
      </div>

  </section>
}
