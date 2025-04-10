import Image from 'next/image'
import Link from 'next/link'
import {Card, Picture, Carousel, Showreels} from 'shared'
import css from './page.module.css'
export default function About() {
  return <>
    <Link href={"/"}> <button>Home</button> </Link>
    <Link href={"/hello"}> <button>Welcome!</button> </Link>
    <Carousel collection={Showreels} upTo={1}/>
  </>
}

const items = [

    <Picture key="1" src="/01.webp" alt="Showreel 2016 Front" />,
    <Picture key="2" src="/01.webp" alt="Showreel 2016 Front" />,
    <Picture key="3" src="/01.webp" alt="Showreel 2016 Front" />,
  
]

//const cards = items.map((e, indx)=> <Card key={indx} items={e} thumb="/01.webp" />)
const cards = [
  <Card key={1} items={items} thumb="/01.webp" />,
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
