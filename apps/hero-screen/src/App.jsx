import styles from './App.module.css';
import { Carousel } from 'shared'
import { Card, Picture, Movie } from 'shared'

// /creo-digital-agency/
import showreelFront2025    from '/static/showreel_2025/front.png'; 
import showreelBack2025     from '/static/showreel_2025/back.png';
import showreelVideo2025    from '/static/showreel_2025/video.mp4';
import showreelFront2024    from '/static/showreel_2024/front.png'; 
import showreelBack2024     from '/static/showreel_2024/back.png';
import showreelVideo2024    from '/static/showreel_2024/video.mp4';
import showreelFront2023    from '/static/showreel_2023/front.png'; 
import showreelBack2023     from '/static/showreel_2023/back.png';
import showreelVideo2023    from '/static/showreel_2023/video.mp4';
import showreelFront2022    from '/static/showreel_2022/front.png'; 
import showreelVideo2022    from '/static/showreel_2022/video.mp4'; 
import showreelFront2021    from '/static/showreel_2021/front.png'; 
import showreelBack2021     from '/static/showreel_2021/back.png';
import showreelVideo2021    from '/static/showreel_2021/video.mp4';
import showreelFront2020    from '/static/showreel_2020/front.png'; 
import showreelBack2020     from '/static/showreel_2020/back.png';
import showreelVideo2020    from '/static/showreel_2020/video.mp4';
import showreelFront2016    from '/static/showreel_2016/front.png'; 
import showreelBack2016     from '/static/showreel_2016/back.png';
import showreelVideo2016    from '/static/showreel_2016/video.mp4';
import posterCREO           from '/static/poster.png'


export default function App() {
  return (
    <div className={styles.app}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Bienvenido a CREO Digital Agency</h1>
          <Carousel collection={deeds} upTo={1} />
          <p className={styles.heroSubtitle}>Danos tu idea, nosotros nos encargamos del resto. Mientras tanto, se te antoja un cafesito?</p>
          <button className={styles.heroButton}>Get Started</button>

          <Carousel collection={deeds} upTo={1} />
          <h2 className={styles.heroSubtitle}>Conoce nuestro trabajo!</h2>



        </div>

      </section>
    </div>
  );
}





const showreel_2025 = () => {

  const items =  [
    <Picture key="1" src={showreelFront2025} alt="Showreel 2025 Front" />,
    //<video key="2" src={showreelVideo2025} controls poster={posterCREO} />,
    <Movie key="2" src={showreelVideo2025} controls poster={posterCREO} />,
    <Picture key="3" src={showreelBack2025} alt="Showreel 2025 Back" />,
  ];

  return <Card key="1" thumb={showreelFront2025} items={items} />
};

const showreel_2024 = () => {

  const items =  [
    <Picture key="1" src={showreelFront2024} alt="Showreel 2024 Front" />,
    <Movie key="2" src={showreelVideo2024} controls poster={posterCREO} />,
    <Picture key="3" src={showreelBack2024} alt="Showreel 2024 Back" />,
  ];

  return <Card key="1" thumb={showreelFront2024} items={items} />
};

const showreel_2023 = () => {

  const items =  [
    <Picture key="1" src={showreelFront2023} alt="Showreel 2023 Front" />,
    <Movie key="2" src={showreelVideo2023} controls poster={posterCREO} />,
    <Picture key="3" src={showreelBack2023} alt="Showreel 2023 Back" />,
  ];

  return <Card key="1" thumb={showreelFront2023} items={items} />
};

const showreel_2022 = () => {
  const items = [
    <Picture key="1" src={showreelFront2022} alt="Showreel 2022 Front" />, 
    <Movie key="2" src={showreelVideo2022} controls poster={posterCREO} alt="Showreel 2022 video" />, 
  ];

  return <Card key="1" thumb={showreelFront2022} items={items} desc="Showreel 2022" />
}

const showreel_2021 = () => {

  const items =  [
    <Picture key="1" src={showreelFront2021} alt="Showreel 2021 Front" />,
    <Movie key="2" src={showreelVideo2021} controls poster={posterCREO} />,
    <Picture key="3" src={showreelBack2021} alt="Showreel 2021 Back" />,
  ];

  return <Card key="1" thumb={showreelFront2021} items={items} />
};

const showreel_2020 = () => {

  const items =  [
    <Picture key="1" src={showreelFront2020} alt="Showreel 2020 Front" />,
    <Movie key="2" src={showreelVideo2020} controls poster={posterCREO} />,
    <Picture key="3" src={showreelBack2020} alt="Showreel 2020 Back" />,
  ];

  return <Card key="1" thumb={showreelFront2020} items={items} />
};

const showreel_2016 = () => {

  const items =  [
    <Picture key="1" src={showreelFront2016} alt="Showreel 2016 Front" />,
    <Movie key="2" src={showreelVideo2016} controls poster={posterCREO} />,
    <Picture key="3" src={showreelBack2016} alt="Showreel 2016 Back" />,
  ];

  return <Card key="1" thumb={showreelFront2016} items={items} />
};

const deeds = [
  showreel_2025(),
  showreel_2024(),
  showreel_2023(),
  showreel_2022(),
  showreel_2021(),
  showreel_2020(),
  showreel_2016(),

]

