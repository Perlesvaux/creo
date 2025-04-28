import { Card, Picture } from 'shared'

// 2017
import logofolio_2017_back   from '../public/portfolio_2017_logos/back.webp';
import logofolio_2017_front  from '../public/portfolio_2017_logos/front.webp';
import logofolio_2017_01  from '../public/portfolio_2017_logos/01.webp';
import logofolio_2017_02  from '../public/portfolio_2017_logos/02.webp';
import logofolio_2017_03  from '../public/portfolio_2017_logos/03.webp';
import logofolio_2017_04  from '../public/portfolio_2017_logos/04.webp';
import logofolio_2017_05  from '../public/portfolio_2017_logos/05.webp';
import logofolio_2017_06  from '../public/portfolio_2017_logos/06.webp';
import logofolio_2017_07  from '../public/portfolio_2017_logos/07.webp';
import logofolio_2017_08  from '../public/portfolio_2017_logos/08.webp';
import logofolio_2017_09  from '../public/portfolio_2017_logos/09.webp';
import logofolio_2017_10  from '../public/portfolio_2017_logos/10.webp';
import logofolio_2017_11  from '../public/portfolio_2017_logos/11.webp';
import logofolio_2017_12  from '../public/portfolio_2017_logos/12.webp';

// 2021
import logofolio_2021_front   from '../public/portfolio_2021_logos/front.webp';
import logofolio_2021 from '../public/portfolio_2021_logos/logofolio_2021.webp';

const _2017 = {
  alt: 'Logos 2017',
  desc: 'Logos 2017',
  tags: 'logos 2017 logofolio AM solutions audiofilia chef urias dave vasquez delis juventud elim austin systemd paralelo producciones servicios express servicios profecionales aluminio vidrio', 
  thumb: logofolio_2017_front,
  content : [ 
    { src: logofolio_2017_front, alt: 'Logos 2017 - Front' }, 
    { src: logofolio_2017_01, alt: '2 AM Solutions' }, 
    { src: logofolio_2017_02, alt: 'AudioFilia ' }, 
    { src: logofolio_2017_03, alt: 'Cuentamelo Cocinando con el Chef Urias' }, 
    { src: logofolio_2017_04, alt: 'Dave Vasquez - Fotografía' }, 
    { src: logofolio_2017_05, alt: 'Delis - con el Chef Urias' }, 
    { src: logofolio_2017_06, alt: 'Gospel TV' }, 
    { src: logofolio_2017_07, alt: 'Jovenes Compaz - Amigos de Verdad' }, 
    { src: logofolio_2017_08, alt: 'Juventud Elim Austin' }, 
    { src: logofolio_2017_09, alt: 'Paralelo Producciones' }, 
    { src: logofolio_2017_10, alt: 'Servicios Express' }, 
    { src: logofolio_2017_11, alt: 'Servicios Profecionales Aluminio y Vidrio' }, 
    { src: logofolio_2017_12, alt: 'Systemd' }, 
    { src: logofolio_2017_back, alt: 'Logos 2017 - Back' }, 
  ],
}

const _2021 = {
  alt: 'Logos 2021',
  desc: 'Logos 2021',
  tags: 'logos 2021 insurance group texas igt onda fria viña dorada hashtag viral restaurante tpt fernando dj here and now english to you delivery river sv la mega radio blue discoteca libre impac records ', 
  thumb: logofolio_2021_front,
  content : [ 
    { src: logofolio_2021, alt: 'Portfolio - Logos 2021' }, 
  ],
}



export default [
  _2021,
  _2017,

].map(({thumb, content, tags, desc, alt}, index) => <Logofolio
  alt={alt}
  desc={desc}
  tags={tags}
  thumb={thumb}
  content={content}
  key={index}
/>)



function Logofolio ({thumb, content, tags, desc, alt}){
  const items = content.map(({src, alt}, index) => <Picture key={index} src={src} alt={alt}/>)
  return <Card thumb={thumb} alt={alt} items={items} desc={desc} tags={tags}/>
}
