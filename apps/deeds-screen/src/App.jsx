import { useState, useEffect, useRef } from 'react'
import { Portfolios } from 'shared'
import SearchIcon from './SearchIcon.jsx'
import css from './App.module.css'
export default function App() {

  
  const [state, setState] = useState("")
  const [visible, setVisible] = useState(false)
  const refBtn = useRef(null)
  const refInp = useRef(null)

  const lookUp = () => {
    setVisible(()=> true)
  }

  const dispel = () => {
    setVisible(()=> false)
  }


  useEffect(() => {

    const clickHandler = (e)=>{
      const valid = e.target !== refInp.current && e.target !== refBtn.current
      if (valid) dispel()
    }

    const keyHandler = (e)=>{
      if (e.key === 'Escape') dispel()
      const f = e.key==='f' || e.key==='F' 
      if (f && e.ctrlKey) lookUp()
    }

    if (refInp.current) refInp.current.focus()

    addEventListener('click', clickHandler)
    addEventListener('keydown', keyHandler)

    return () => {
      console.log('search closed')
      removeEventListener('click', clickHandler)
      removeEventListener('keydown', keyHandler)
    }

  }, [visible])
  


  const filterByTags = (e) => {
    const wordByWord = state.toLowerCase().split(" ")
    const result = wordByWord.every(word => e.includes(word))
    return result
  } 

  return<div className={css.container}>

    <h1>Conoce nuestro trabajo!</h1>

    <button 
      ref={refBtn}
      className={`${css.searchButton} ${visible? css.invisible : css.visible}`}
      onClick={lookUp}
    > <SearchIcon className={css.lookingGlass} /> </button>

    <input 
      ref={refInp} type="text" 
      className={`${css.searchBar} ${ visible? css.visible : css.invisible }`}
      value={state} onChange={(e)=>setState(e.target.value)} 
      placeholder="i.e.: 2025, taber, river, onda fria" 
    />
    
    <div className={css.records}>
      { Portfolios.map((item)=> (
        <div key={item.props.tags.toLowerCase()} >{item}</div>
      )).filter(e => filterByTags(e.key) ) }
    </div>

  </div>
}


    //)).filter(e => { separate(e.key) ; return e.key.includes(state.toLowerCase()) } ) }
