import { useState } from 'react'
//import Carousel from './Carousel.jsx'
import { Carousel, SimpleScreen, Card, Portfolios } from 'shared'
//import HelloWorld from '../../../../../components/HelloWorld.jsx'
//import css from './App.module.css'
//import { deeds} from './Content.jsx'
import css from './App.module.css'
export default function App() {
  const [state, setState] = useState("")

  function filterByTags (e) {
    const wordByWord = state.split(" ")
    const result = wordByWord.every(word => e.includes(word)   )
    return result
  } 

  return<div className={css.container}>
    <input type="text" value={state} onChange={(e)=>setState(e.target.value)} placeholder="i.e.: 2025, taber, river, onda fria" />
    <div className={css.records}>
      { Portfolios.map((item, indx)=> (
        <div key={item.props.tags.toLowerCase()} >{item}</div>
      )).filter(e => filterByTags(e.key) ) }
    </div>
  </div>
}


    //)).filter(e => { separate(e.key) ; return e.key.includes(state.toLowerCase()) } ) }
