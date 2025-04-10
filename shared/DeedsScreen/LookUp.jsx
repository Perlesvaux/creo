import { useState, useEffect, useRef } from 'react'
import SearchIcon from './SearchIcon.jsx'
import css from './LookUp.module.css'

export default function LookUp ({value, setter}){

  const [visible, setVisible] = useState(false)
  const refBtn = useRef(null)
  const refInp = useRef(null)
  const lookUp = () => setVisible(() => true)  
  const dispel = () => setVisible(() => false)

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

  let timerID;

  return <>
    <button 
      ref={refBtn}
      className={`${css.searchButton} ${visible? css.invisible : css.visible}`}
      onClick={lookUp}
    > 
      <h1>
        <SearchIcon className={css.lookingGlass1} />
        Conoce nuestro trabajo!
      </h1>
    </button>


    <div className={`${css.input} ${ visible? css.visible : css.invisible }`}>
      <SearchIcon className={css.lookingGlass} />
      <input 
        ref={refInp} type="text" 
        className={css.searchBar}
        value={value} onChange={(e)=>setter(e.target.value)} 
        placeholder="i.e.: 2025, taber, river, onda fria" 
      />
    </div>
  </>

}

