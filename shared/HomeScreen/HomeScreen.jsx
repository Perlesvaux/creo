import styles from './HomeScreen.module.css';
//import { Carousel, Portfolios, Showreels } from 'shared'
import { Carousel, Customers } from 'shared'
import Coffee from './Coffee.jsx'
import FireButton from './FireButton.jsx'
import Brewer from './Brewer.jsx'
import Quotes from './Quotes.jsx'
//import showreels from './Showreels.jsx'
//import portfolios from './Portfolios.jsx'



export default function HomeScreen( { portfolios, showreels } ) {

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

          <FireButton to="creoagenciadigital@gmail.com" className={styles.heroButton}>Let's brew something <Brewer/></FireButton>

          <div className={styles.deeds}>
            <div className={styles.portfolios}><Carousel collection={portfolios} upTo={1} vertical={true} /> </div>
            <div className={styles.logofolios}><Carousel collection={showreels} upTo={1}  vertical={true} /></div>
          </div>

          <h2 className={styles.heroSubtitle}>Se parte de nuestros clientes!</h2>


        </div>

      </section>
          <Customers />
    </div>
  );
}





