"use client"
import {useState, useRef, useEffect} from 'react'
import css from './Picture.module.css'
export default function Picture ({src, alt}){
  const [isZoomed, setIsZoomed] = useState(false)
  const ref = useRef(null)

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  const toggleOff = () => {
    setIsZoomed(false)
  }

  useEffect(() => {
    if (ref.current){
      if (isZoomed){
        ref.current.showModal()
      } else {
        ref.current.close()
      }
    }

    const clickHandler = (e)=>{
      console.log(e.target, ref.current)
      if (e.target === ref.current) {
        toggleOff()
      }
    }

    addEventListener('click', clickHandler)

    return () => {
      console.log('modal 2 closed')
      removeEventListener('click', clickHandler)

    }
  }, [isZoomed])



  return <>
    <img src={src} alt={alt}  onClick={toggleZoom} className={css.pic} loading="lazy" />
      <dialog ref={ref} onClose={(e)=>{toggleOff() ; e.stopPropagation()}} className={css.modal} > 
        <img src={src} alt={alt} onClick={toggleOff} className={css.bigscreen} loading="lazy"  />
      </dialog>
  </>

}
//<h1 popover="True" id="myheader">Hello</h1>
//
//<button popovertarget="myheader">Click me!</button>
