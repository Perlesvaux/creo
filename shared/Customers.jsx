import Image from 'next/image'
import css from './Customers.module.css'
import impacrecords from '../public/customers/impacrecords.png'
import ondafria from '../public/customers/ondafria.png'
import phonetechnology503 from '../public/customers/phonetechnology503.png'
import riversv from '../public/customers/riversv.png'
import fishchips from '../public/customers/fishchips.png'
import lavalenciana from '../public/customers/lavalenciana.png'
import charliemarlin from '../public/customers/charliemarlin.png'
import chaineado from '../public/customers/chaineado.png'
import uno from '../public/customers/uno.png'
import bcluxuryauto from '../public/customers/bcluxuryauto.png'
import elevate from '../public/customers/elevateacademy.png'
import igt from '../public/customers/insurancegroupoftexas.png'
import taber from '../public/customers/taber.png'
import hereandnowenglish from '../public/customers/hereandnowenglish.png'
import puma from '../public/customers/puma.png'
import ecoluz from '../public/customers/ecoluz.png'
import nq from '../public/customers/nq.jpg'
import rescuepc from '../public/customers/rescuepc.jpeg'

export default function Customers () {

  const customers = [ 
    {src:elevate, alt:'Elevate Academy' },
    {src:taber, alt:'Tabernaculo Biblico Bautista' },
    {src:riversv, alt:'Riversv' },
    {src:charliemarlin, alt:'Charlie Marlin' },
    {src:lavalenciana, alt:'La Valenciana' },
    {src:impacrecords, alt:'Impac Records' },
    {src:ondafria, alt:'Onda Fria' },
    {src:phonetechnology503, alt:'Phone Technology 503' },
    {src:chaineado, alt:'Chaineado' },
    {src:uno, alt:'Gasolinera UNO' },
    {src:bcluxuryauto, alt:'B & C Luxury Auto' },
    {src:igt, alt:'Insurance Group of Texas' },
    {src:fishchips, alt:'Fish & Chips' },
    {src:hereandnowenglish, alt:'Here and Now English' },
    {src: puma , alt:'Gasolinera Puma'},
    {src: ecoluz, alt:'Eco Luz'},
    {src: nq,  alt:'National Quality Insurance Group'},
    {src: rescuepc, alt:'Rescue PC - Flor Blanca'},


  ]

  return <article className={css.container}>
    {
      customers.map(({src, alt}, index) => <Image
        alt={alt}
        title={alt}
        key={index}
        src={src}
        width={100}
        height={100}
        className={css.img}
        placeholder="blur" 
        loading="lazy"

      />)
    }
    </article>
}

