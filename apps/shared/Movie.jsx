import { useEffect, useRef } from 'react'
export default function Movie ({src, poster}){
  const ref = useRef(null)
  useEffect(() => {

    // Clicking outside of video, pauses it
    const clickHandler = (e)=>{
      if (e.target !== ref.current) {
        ref.current.pause()
      }
    }

    addEventListener('click', clickHandler)

    return () => {
      removeEventListener('click', clickHandler)
    }
  }, [])

  return <video src={src} controls poster={poster} ref={ref} />
}
