//import { useReducer } from 'react'
//import Carousel from './Carousel.jsx'
import { Carousel, Showreels } from 'shared'
//import HelloWorld from '../../../../../components/HelloWorld.jsx'
//import css from './App.module.css'
//import { deeds} from './Content.jsx'

export default function App() {

  return<>
    <Carousel collection={Showreels} upTo={1} />
  </>
  
}

