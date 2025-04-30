"use client"
import {useEffect, useRef, useState} from 'react'
import css from './Modal.module.css'
import { SimpleScreen, CreoLogo, Exit } from 'shared'

export default function Modal({active, setter, items}){
  const [visibleItems, setVisibleItems] = useState(items.slice(0,5))
  const [page, setPage] = useState(1)
  const btn = useRef(null)
  const ref = useRef(null)
  const limitReached = visibleItems.length === items.length

  useEffect(() => {
    if (ref.current){
      if (active){
        ref.current.showModal()
      } else {
        ref.current.close()
      }
    }

    const clickHandler = (e)=>{
      if (e.target === ref.current) {
        setter()
      }
    }

    addEventListener('click', clickHandler)

    return () => {
      removeEventListener('click', clickHandler)

    }
  }, [active, setter])


  useEffect(() => {
    setVisibleItems(items.slice(0,5))
    setPage(1)

    const container = ref.current;
    const fireButton = btn.current;

    const loadMoreContent = () => {
      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container;

        if (scrollTop + clientHeight >= scrollHeight - 300) {
          if (fireButton) {
            fireButton.click()
          }
        }
      }
    };

    // Used for debouncing, as triggering function after every scroll would be too expensive
    let timeoutId;

    const handleScroll = (e) => {
      e.stopPropagation()
      // Clear the previous timeout if it exists
      if (timeoutId) clearTimeout(timeoutId);

      // Set a new timeout to call setYaxis after some inactivity
      timeoutId = setTimeout( () => {
        loadMoreContent()
      }, 400); 
    };


    if (container) container.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
    };

  }, [items])
  


  const loadMore = (e) => {
    e.stopPropagation()
    const nextPage = page + 1;
    const nextItems = items.slice(0, nextPage * 5)
    setVisibleItems(nextItems)
    setPage(nextPage)
  }

  return <dialog ref={ref} onClose={setter} className={css.glass}>
    <Exit onClick={setter} />
      <SimpleScreen collection={visibleItems} /> 
    <button className={limitReached? css.hide : css.loadMore} ref={btn} onClick={loadMore} ><CreoLogo className={css.logo} /></button>
  </dialog>
}
    //<button onClick={setter} className={css.closeButton}>x</button>

