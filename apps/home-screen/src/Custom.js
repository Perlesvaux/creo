import {useRef, useState, useReducer, useEffect} from 'react'

export function useArrowButtons(fun, activeClass, keyList){
  const [active, setActive] = useState('')

  useEffect(() => {
    let timerID;

    const handleFunction =() =>{
      setActive('')
      fun()
    }

    const handleAnimation = () => {
      if (timerID) clearTimeout(timerID)
      setActive(activeClass)
      timerID = setTimeout(handleFunction, 100)
    }

    const validateKey = (event) => {
      return keyList.some(e => event.key === e)
    }

    const handleKeyDown = (event) => {
      if (validateKey(event)) {
        handleAnimation()
      }
    }

    addEventListener('keydown', handleKeyDown)

    return () => {
      removeEventListener('keydown', handleKeyDown)
      if (timerID) clearTimeout(timerID)
    }
  }, [])

  return active
}
