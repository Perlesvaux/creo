"use client"
import { useState } from 'react'
import { Portfolios } from 'shared'
//import SearchIcon from './SearchIcon.jsx'
import css from './DeedsScreen.module.css'
import LookUp from './LookUp.jsx'


export default function DeedsScreen() {
  const [state, setState] = useState("")

  const filterByTags = (e) => {
    const wordByWord = state.toLowerCase().split(" ")
    const result = wordByWord.every(word => e.includes(word))
    return result
  } 

  return <div className={css.container}>

    <LookUp value={state} setter={setState} />

    <div className={css.records}>
      { Portfolios.map((item)=> (
        <div key={item.props.tags.toLowerCase()} >{item}</div>
      )).filter(e => filterByTags(e.key) ) }
    </div>

  </div>
}

