import { Card, Picture } from 'shared'
import _2025 from './assets/portfolio_2025.js'
import _2024 from './assets/portfolio_2024.js'
import _2023 from './assets/portfolio_2023.js'
import _2022_comercial from './assets/portfolio_2022_comercial.js'
import _2022_deportivo from './assets/portfolio_2022_deportivo.js'
import _2022_pastor_rosales from './assets/portfolio_2022_pastor_rosales.js'




export default [
  _2025,
  _2024,
  _2023,
  _2022_comercial,
  _2022_deportivo,
  _2022_pastor_rosales

].map(({desc, tags, thumb, content, alt}, index)=> <Portfolio 
  alt={alt}
  desc={desc}
  tags={tags}
  thumb={thumb}
  content={content}
  key={index}
/>)


function Portfolio ({thumb, content, tags, desc, alt}){
  const items = content.map(({src, alt}, index) => <Picture key={index} src={src} alt={alt}/>)
  return <Card thumb={thumb} alt={alt} items={items} desc={desc} tags={tags}/>
}


