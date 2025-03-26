import css from './App.module.css'
import banner from '/assets/images/banner.png'
import facebook from '/assets/images/facebook.svg'
import instagram from '/assets/images/instagram.svg'
import linkedin from '/assets/images/linkedin.svg'
import vimeo from '/assets/images/vimeo.svg'
import behance from '/assets/images/behance.svg'
import Social from './Social.jsx'

export default function App() {
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

//{ socials.map((elem, index)=><Social key={index} {...elem} />) }
//{ socials.map(({icon, to}, index)=><Social key={index} icon={icon} to={to} />) }
