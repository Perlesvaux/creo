import { Card, Picture, Movie } from 'shared'

// 2025
import showreelFront2025    from  '../public/showreel_2025/front.webp'; 
import showreelBack2025     from  '../public/showreel_2025/back.webp';
const showreelVideo2025    =  '/showreel_2025/video.mp4';

// 2024
import showreelFront2024    from  '../public/showreel_2024/front.webp'; 
import showreelBack2024     from  '../public/showreel_2024/back.webp';
const showreelVideo2024    =  '/showreel_2024/video.mp4';

// 2023
import showreelFront2023    from  '../public/showreel_2023/front.webp'; 
import showreelBack2023     from  '../public/showreel_2023/back.webp';
const showreelVideo2023    =  '/showreel_2023/video.mp4';

// 2022
import showreelFront2022    from  '../public/showreel_2022/front.webp'; 
const showreelVideo2022    =  '/showreel_2022/video.mp4'; 

// 2021
import showreelFront2021    from  '../public/showreel_2021/front.webp'; 
import showreelBack2021     from  '../public/showreel_2021/back.webp';
const showreelVideo2021    =  '/showreel_2021/video.mp4';

// 2020
import showreelFront2020    from  '../public/showreel_2020/front.webp'; 
import showreelBack2020     from  '../public/showreel_2020/back.webp';
const showreelVideo2020    =  '/showreel_2020/video.mp4';

// 2016
import showreelFront2016    from  '../public/showreel_2016/front.webp'; 
import showreelBack2016     from  '../public/showreel_2016/back.webp';
const showreelVideo2016    =  '/showreel_2016/video.mp4';

// Poster image
const posterCREO           =  '/poster.webp'


const _2025 = {
  alt: 'Showreel 2025',
  front: {src:showreelFront2025, alt: 'Front cover of 2025 CREO Showreel'} ,
  back: {src:showreelBack2025, alt: 'Front cover of 2025 CREO Showreel'} ,
  video:showreelVideo2025,
}

const _2024 = {
  alt:'Showreel 2024',
  front: { src:showreelFront2024, alt:'Showreel 2024 Front'},
  back: { src:showreelBack2024, alt:'Showreel 2024 Back'},
  video:showreelVideo2024 
}

const _2023 = {
  alt:'Showreel 2023',
  front: { src:showreelFront2023, alt:'Showreel 2023 Front' },
  back:  { src:showreelBack2023, alt:'Showreel 2023 Back' },
  video:showreelVideo2023
}

const _2022 = {
  alt: 'Showreel 2022',
  desc: 'Showreel 2022',
  front: {src:showreelFront2022,alt:'Showreel 2022 Front'},
  video: showreelVideo2022
}

const _2021 = {
  alt: 'Showreel 2021',
  front: {src: showreelFront2021, alt:'Showreel 2021 Front' },
  back: {src: showreelBack2021, alt:'Showreel 2021 Back' },
  video: showreelVideo2021
}

const _2020 = {
  alt: 'Showreel 2020',
  front:{src:showreelFront2020, alt:'Showreel 2020 Front'},
  back:{ src:showreelBack2020 ,  alt:'Showreel 2020 Back' },
  video:showreelVideo2020
}

const _2016 = {
  alt: 'Showreel 2016',
  front: { src:showreelFront2016, alt:'Showreel 2016 Front'} ,
  back: { src:showreelBack2016,  alt:'Showreel 2016 Back' } ,
  video:showreelVideo2016,
}


export default  [
  _2025,
  _2024,
  _2023,
  _2022,
  _2021,
  _2020,
  _2016

].map(({alt, desc, front, back, video}, index)=> <Showreel 
  alt={alt}
  desc={desc}
  front={front}
  back={back}
  video={video}
  key={index}
/>)


function Showreel ({front, back, video, desc, alt}){

  const items =  [
    front && <Picture key="1" src={front.src} alt={front.alt} />,
   <Movie   key="2" src={video} controls poster={posterCREO} />,
    back && <Picture key="3" src={back.src} alt={back.alt}/>,
  ];

  return <Card thumb={front.src} alt={alt} items={items} desc={desc} />
}
