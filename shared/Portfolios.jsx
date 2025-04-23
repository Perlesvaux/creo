"use client"
import { Card, Picture } from 'shared'
// /creo-digital-agency/
// 2025
import portfolio2025_back   from '../public/portfolio_2025/back.webp';
import portfolio2025_front  from '../public/portfolio_2025/front.webp';
import impactrecords_banner from '../public/portfolio_2025/impactrecords_banner.webp';
import impactrecords_1      from '../public/portfolio_2025/impactrecords_1.webp';
import impactrecords_2      from '../public/portfolio_2025/impactrecords_2.webp';
import impactrecords_3      from '../public/portfolio_2025/impactrecords_3.webp';
import impactrecords_4      from '../public/portfolio_2025/impactrecords_4.webp';
import impactrecords_5      from '../public/portfolio_2025/impactrecords_5.webp';
import impactrecords_6      from '../public/portfolio_2025/impactrecords_6.webp';
import impactrecords_7      from '../public/portfolio_2025/impactrecords_7.webp';
import impactrecords_8      from '../public/portfolio_2025/impactrecords_8.webp';
import impactrecords_9      from '../public/portfolio_2025/impactrecords_9.webp';
import taber_banner         from '../public/portfolio_2025/taber_banner.webp';
import taber_1              from '../public/portfolio_2025/taber_1.webp';
import taber_2              from '../public/portfolio_2025/taber_2.webp';
import taber_3              from '../public/portfolio_2025/taber_3.webp';
import taber_4              from '../public/portfolio_2025/taber_4.webp';
import taber_5              from '../public/portfolio_2025/taber_5.webp';
import taber_6              from '../public/portfolio_2025/taber_6.webp';
import taber_7              from '../public/portfolio_2025/taber_7.webp';
import taber_8              from '../public/portfolio_2025/taber_8.webp';
import taber_9              from '../public/portfolio_2025/taber_9.webp';
import taber_10             from '../public/portfolio_2025/taber_10.webp';
import taber_11             from '../public/portfolio_2025/taber_11.webp';
import taber_12             from '../public/portfolio_2025/taber_12.webp';
import taber_13             from '../public/portfolio_2025/taber_13.webp';
import taber_14             from '../public/portfolio_2025/taber_14.webp';
import taber_15             from '../public/portfolio_2025/taber_15.webp';
import taber_16             from '../public/portfolio_2025/taber_16.webp';
import taber_17             from '../public/portfolio_2025/taber_17.webp';
import tufuturacasa_banner  from '../public/portfolio_2025/tufuturacasa_banner.webp';
import tufuturacasa_1       from '../public/portfolio_2025/tufuturacasa_1.webp';
import tufuturacasa_2       from '../public/portfolio_2025/tufuturacasa_2.webp';
import tufuturacasa_3       from '../public/portfolio_2025/tufuturacasa_3.webp';
import tufuturacasa_4       from '../public/portfolio_2025/tufuturacasa_4.webp';
import tufuturacasa_5       from '../public/portfolio_2025/tufuturacasa_5.webp';
import tufuturacasa_6       from '../public/portfolio_2025/tufuturacasa_6.webp';
import tufuturacasa_7       from '../public/portfolio_2025/tufuturacasa_7.webp';
import tufuturacasa_8       from '../public/portfolio_2025/tufuturacasa_8.webp';
import tufuturacasa_9       from '../public/portfolio_2025/tufuturacasa_9.webp';
import bc_banner            from '../public/portfolio_2025/bc_banner.webp';
import bc_1                 from '../public/portfolio_2025/bc_1.webp';
import bc_2                 from '../public/portfolio_2025/bc_2.webp';
import bc_3                 from '../public/portfolio_2025/bc_3.webp';
import bc_4                 from '../public/portfolio_2025/bc_4.webp';
import bc_5                 from '../public/portfolio_2025/bc_5.webp';
import bc_6                 from '../public/portfolio_2025/bc_6.webp';
import bc_7                 from '../public/portfolio_2025/bc_7.webp';
import bc_8                 from '../public/portfolio_2025/bc_8.webp';
import bc_9                 from '../public/portfolio_2025/bc_9.webp';

// 2024
import portfolio2024_back  from  '../public/portfolio_2024/back.webp'
import portfolio2024_front from  '../public/portfolio_2024/front.webp'
import elevate24           from  '../public/portfolio_2024/elevate.webp'
import igt24               from  '../public/portfolio_2024/igt.webp'
import impacrecords24      from  '../public/portfolio_2024/impacrecords.webp'
import taber1_24           from  '../public/portfolio_2024/taber1.webp'
import taber2_24           from  '../public/portfolio_2024/taber2.webp'
import tufuturacasa24      from  '../public/portfolio_2024/tufuturacasa.webp'

//2023
const portfolio2023_back     = '/portfolio_2023/back.webp'
const portfolio2023_front    = '/portfolio_2023/front.webp'
const chaineado23            = '/portfolio_2023/chaineado.webp'
const charliemarlin23        = '/portfolio_2023/charliemarlin.webp'
const elevate23              = '/portfolio_2023/elevate.webp'
const fishchips23            = '/portfolio_2023/fishchips.webp'
const igt23                  = '/portfolio_2023/igt.webp'
const lavalenciana23         = '/portfolio_2023/lavalenciana.webp'
const ondafria23             = '/portfolio_2023/ondafria.webp'
const phonetechnology503_23  = '/portfolio_2023/phonetechnology503.webp'
const riversv23              = '/portfolio_2023/riversv.webp'
const taber_23               = '/portfolio_2023/taber1.webp'
const uno23                  = '/portfolio_2023/uno.webp'

//2022
const portfolio2022_front    = '/showreel_2022/front.webp'
const p22comercial           = '/portfolio_2022_comercial/portfolio.webp'
const p22deportivo           = '/portfolio_2022_deportivo/portfolio.webp'


//const portfolio_2025 = ()=>{
//
//const tags = "2025 Portafolio taber tu futura casa impac records b & c luxury auto "
//
//const items = [
//  portfolio2025_front,
//  taber_banner, taber_1, taber_2, taber_3, taber_4, taber_5, taber_6, taber_7, taber_8, taber_9, taber_10, taber_11, taber_12, taber_13, taber_14, taber_15, taber_16, taber_17,
//  bc_banner, bc_1, bc_2, bc_3, bc_4, bc_5, bc_6, bc_7, bc_8, bc_9,
//  tufuturacasa_banner, tufuturacasa_1, tufuturacasa_2, tufuturacasa_3, tufuturacasa_4, tufuturacasa_5, tufuturacasa_6, tufuturacasa_7, tufuturacasa_8, tufuturacasa_9,
//  impactrecords_banner, impactrecords_1, impactrecords_2, impactrecords_3, impactrecords_4, impactrecords_5, impactrecords_6, impactrecords_7, impactrecords_8,  impactrecords_9,
//  portfolio2025_back,
//].map((e, i) => <Picture key={i} src={e}/>)
//1
//  return <Card key="1" thumb={portfolio2025_front} items={items} tags={tags} />
//}

const portfolio_2024 = ()=>{

  const tags = "2024 Portafolio elevate igt impac records taber tu futura casa"

  const items = [portfolio2024_front,elevate24,igt24,impacrecords24,taber1_24,taber2_24,tufuturacasa24,portfolio2024_back]
    .map((e, i) => <Picture key={i} src={e}/>)

  return <Card key="2" thumb={portfolio2024_front} items={items} tags={tags} />
}


//const portfolio_2023 = ()=>{
//
//  const tags = "2023 Portafolio fishchips fish chips elevate charlie marlin la valenciana onda fria river plate sv taber uno phone technology chaineado"
//
//  const items = [
//    portfolio2023_front,chaineado23,charliemarlin23,elevate23,fishchips23,igt23,lavalenciana23,ondafria23
//    ,phonetechnology503_23,riversv23,taber_23,uno23,portfolio2023_back
//  ]
//  .map((e, i) => <Picture key={i} src={e}/>)
//
//  return <Card key="2" thumb={portfolio2023_front} items={items} tags={tags} />
//}
//
//const portfolio_2022_comercial = () => {
//
//  const tags = "2022 Portafolio Comercial insurance group of texas onda fria uno chaineado la valenciana here and now english taber" 
//
//  const desc = "Portafolio Comercial 2022" 
//
//  const items = [
//    p22comercial
//  ].map((e, i) => <Picture key={i} src={e}/>)
//
//  return <Card key="3" thumb={portfolio2022_front}  items={items} desc={desc} tags={tags}/>
//}
//
//const portfolio_2022_deportivo = () => {
//
//  const tags = "2022 Portafolio Deportivo river plate sv dribling " 
//
//  const desc = "Portafolio Deportivo 2022" 
//
//  const items = [
//    p22deportivo
//  ].map((e, i) => <Picture key={i} src={e}/>)
//
//  return <Card key="3" thumb={portfolio2022_front} items={items} desc={desc} tags={tags}/>
//}



export default [
  //portfolio_2025(),

<Portfolio 
  thumb={portfolio2024_front}
  content={ [
    { src: portfolio2024_front, alt: 'Front cover of 2024 CREO Portfolio' },
    { src: elevate24, alt: 'Elevate Academy spot 2024' },
    { src: igt24, alt: 'IGT publicitary spot 2024' },
    { src: impacrecords24, alt: 'ImpacRecords 2024 spot' },
    { src: taber1_24, alt: 'Tabernaculo Biblico Bautista spot 2024' },
    { src: taber2_24, alt: 'Tabernaculo Biblico Bautista spot 2024' },
    { src: tufuturacasa24, alt: 'Tu Futura Casa spot 2024' },
    { src: portfolio2024_back, alt: 'Back side of 2024 CREO Portfolio' },
  ] }
  tags='2024 Portafolio elevate igt impac records taber tu futura casa'
  desc='Portfolio 2024'
/>,

  //portfolio_2024(),
  //portfolio_2023(),
  //portfolio_2022_comercial(),
  //portfolio_2022_deportivo(),

]



function Portfolio ({thumb, content, tags, desc}){

  //const tags = "2022 Portafolio Comercial insurance group of texas onda fria uno chaineado la valenciana here and now english taber" 

  //const desc = "Portafolio Comercial 2022" 

  const items = content.map(({src, alt}, index) => <Picture key={index} src={src} alt={alt}/>)

  return <Card thumb={thumb} alt={desc} items={items} desc={desc} tags={tags}/>

}
