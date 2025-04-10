import Image from 'next/image'
import {Card, Picture, Carousel, Showreels} from 'shared'
import css from './page.module.css'
export default function About() {
  return <>
    <Carousel collection={cards} upTo={1}/>
  </>
}

const items = [

    <Picture key="1" src="/01.webp" alt="Showreel 2016 Front" />,
    <Picture key="2" src="/01.webp" alt="Showreel 2016 Front" />,
    <Picture key="3" src="/01.webp" alt="Showreel 2016 Front" />,
  
]

//const cards = items.map((e, indx)=> <Card key={indx} items={e} thumb="/01.webp" />)
const cards = [
  <Card key={1} items={items} thumb="./castro.png" />,
]




    //<Image
    //  src="/castro.png"
    //  alt="Super Muscular JAPR & Castro"
    //  className="object-fit"
    //  //height={1000}
    //  //width={800}
    //  fill
    //
    //  sizes="(max-width: 768px) 100vw, 50vw"
    ///>
