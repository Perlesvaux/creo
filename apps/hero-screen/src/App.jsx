import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Bienvenido a CREO Digital Agency</h1>
          <p className={styles.heroSubtitle}>Danos tu idea, nosotros nos encargamos del resto. Mientras tanto, se te antoja un cafesito?</p>
          <button className={styles.heroButton}>Get Started</button>
        </div>
      </section>
    </div>
  );
}
