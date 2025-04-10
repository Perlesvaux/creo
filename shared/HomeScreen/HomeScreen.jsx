import styles from './HomeScreen.module.css';
import { Carousel, Portfolios, Showreels } from 'shared'
import Coffee from './Coffee.jsx'
import FireButton from './FireButton.jsx'
import Brewer from './Brewer.jsx'
import Quotes from './Quotes.jsx'
//import showreels from './Showreels.jsx'
//import portfolios from './Portfolios.jsx'



export default function HomeScreen() {

  if (!Portfolios) return <div> loading ...</div>
  if (!Showreels) return <div> loading ...</div>


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
            <Carousel collection={Showreels} upTo={1} vertical={true} />
            <Quotes />
          </div>

          <FireButton className={styles.heroButton}>Let's brew something <Brewer/></FireButton>

          <div className={styles.deeds}>
            <div className={styles.portfolios}><Carousel collection={Portfolios} upTo={1} vertical={true} /> </div>
            <div className={styles.logofolios}><Carousel collection={Showreels} upTo={1}  vertical={true} /></div>
          </div>

          <h2 className={styles.heroSubtitle}>Conocenos!</h2>


        </div>

      </section>
    </div>
  );
}





