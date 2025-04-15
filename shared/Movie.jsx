"use client"
import { useEffect, useRef } from 'react'
export default function Movie ({src, poster}){
  const ref = useRef(null)
  useEffect(() => {

    // Pause video by clicking anything else
    const clickHandler = (e)=>{
      if (e.target !== ref.current) {
        ref.current.pause()
      }
    }

    // Pressing ESC also pauses the video
    const keyHandler = (e)=>{
      if (e.key==='Escape' && ref.current) ref.current.pause()
    }

    addEventListener('click', clickHandler)
    addEventListener('keydown', keyHandler)

    return () => {
      removeEventListener('click', clickHandler)
      removeEventListener('keydown', keyHandler)
    }
  }, [])

  //return <video src={src} controls poster={poster} ref={ref}  />
  return <video src={src} controls poster={poster} ref={ref} loading="lazy" preload="none" />
}
