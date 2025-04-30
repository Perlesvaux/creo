"use client"
import Image from 'next/image'
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
      if (e.target === ref.current) {
        toggleOff()
      }
    }

    addEventListener('click', clickHandler)

    return () => {
      removeEventListener('click', clickHandler)

    }
  }, [isZoomed])



  return <>
    <Image src={src} alt={alt}  onClick={toggleZoom} className={css.pic} loading="lazy" placeholder="blur" width={Number(process.env.NEXT_PUBLIC_PICTURE_PREVIEW_W)} height={Number(process.env.NEXT_PUBLIC_PICTURE_PREVIEW_H)} />
      <dialog ref={ref} onClose={(e)=>{toggleOff() ; e.stopPropagation()}} className={css.modal} > 
        <Image src={src} alt={alt} onClick={toggleOff} className={css.bigscreen} loading="lazy" placeholder="blur" width={Number(process.env.NEXT_PUBLIC_PICTURE_W)} height={Number(process.env.NEXT_PUBLIC_PICTURE_H)} />
      </dialog>
  </>

}

