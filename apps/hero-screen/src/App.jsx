import styles from './App.module.css';
import { Carousel } from 'shared'
import Coffee from './Coffee.jsx'
import FireButton from './FireButton.jsx'
import Brewer from './Brewer.jsx'
import Quotes from './Quotes.jsx'
import showreels from './Showreels.jsx'
import portfolios from './Portfolios.jsx'



export default function App() {

  if (!portfolios) return <div> loading ...</div>
  if (!showreels) return <div> loading ...</div>


  return (
    <div className={styles.app}>

      <section className={styles.hero}>

        <div className={styles.heroContent}>
          
          <h1 className={styles.heroTitle}>Bienvenido a CREO!</h1>
          
          <p className={styles.heroSubtitle}>
          Danos tu idea, nosotros nos encargamos del resto.
          Mientras tanto ¿qué tal un cafesito? <Coffee fill="goldenrod" />
          </p>

          <div className={styles.presentation}>
            <Carousel collection={showreels} upTo={1} vertical={true} />
            <Quotes />
          </div>

          <FireButton className={styles.heroButton}>Let's brew something <Brewer/></FireButton>

          { portfolios ? <Carousel collection={portfolios} upTo={3} /> : <span>loading...</span> }

          <h2 className={styles.heroSubtitle}>Conocenos!</h2>

          <Carousel collection={showreels} upTo={2} />

        </div>

      </section>
    </div>
  );
}





