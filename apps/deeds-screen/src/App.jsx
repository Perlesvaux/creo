import { useState, useEffect, useRef } from 'react'
//import Carousel from './Carousel.jsx'
import { Carousel, SimpleScreen, Card, Portfolios } from 'shared'
//import HelloWorld from '../../../../../components/HelloWorld.jsx'
//import css from './App.module.css'
//import { deeds} from './Content.jsx'
import css from './App.module.css'
export default function App() {

  
  const [state, setState] = useState("")
  const [visible, setVisible] = useState(false)
  const refBtn = useRef(null)
  const refInp = useRef(null)

  const lookUp = () => {
    setVisible(true)
  }

  const dispel = () => {
    setVisible(false)
  }


  useEffect(() => {

    const clickHandler = (e)=>{
      if (!refBtn.current && !refInp.current) return

      if (e.target === refBtn.current) {
        refBtn.current.click()
        refInp.current.focus()
      } 

      if (e.target === refInp.current ) {
        return
      }

      if (e.target !== refInp.current && e.target !== refBtn.current){
        dispel()
      }
    }


    const keyHandler = (e) => {
      if (e.key === 'Escape') dispel()

      const exists = refBtn.current && refInp.current

      if (!exists) return

      const ctrl_F = e.key === 'F' && e.ctrlKey
      const ctrl_f = e.key === 'f'&& e.shiftKey && e.ctrlKey

      if ( exists && ctrl_F || exists && ctrl_f  ) refBtn.current.click()
    }


    addEventListener('click', clickHandler)
    addEventListener('keydown', keyHandler)

    return () => {
      console.log('search closed')
      removeEventListener('click', clickHandler)
      removeEventListener('keydown', keyHandler)
    }

  }, [lookUp, dispel])
  


  const filterByTags = (e) => {
    const wordByWord = state.toLowerCase().split(" ")
    const result = wordByWord.every(word => e.includes(word))
    return result
  } 

  return<div className={css.container}>

    <h1>Conoce nuestro trabajo!</h1>

    <button 
      ref={refBtn}
      className={visible? css.invisible : css.visible}
      onClick={lookUp}
    > Search </button>

    <input 
      ref={refInp} type="text" className={visible? css.visible : css.invisible}
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
