import css from './Banner.module.css'
import Social from './Social.jsx'

const banner = '/assets/banner.png'
const facebook = '/assets/facebook.svg'
const instagram = '/assets/instagram.svg'
const linkedin = '/assets/linkedin.svg'
const vimeo = '/assets/vimeo.svg'
const behance = '/assets/behance.svg'

export default function Banner() {
  const socials = [
    { icon:facebook, to:"https://www.facebook.com/CREOAgenciaDigital" },
    { icon:instagram, to:"https://www.instagram.com/creoagenciadigital" },
    { icon:vimeo, to:"https://www.vimeo.com/creoagenciadigital" },
    { icon:linkedin, to:"https://www.linkedin.com/company/creoagenciadigital" },
    { icon:behance, to:"https://www.behance.com/CREOAgenciaDigital" },
  ]

  return (<div className={css.banner}>
    <img src={banner} alt="Banner Image" className={css.bannerImage}/>
    <div className={css.socials}> 
      { socials.map((props, index)=><Social key={index} {...props} />) }
    </div>
  </div>)
}

