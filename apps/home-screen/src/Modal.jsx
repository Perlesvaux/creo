import {useEffect, useRef, useState} from 'react'
import css from './Modal.module.css'
//import SimpleScreen from './SimpleScreen.jsx'
import { SimpleScreen, CreoLogo, Exit } from 'shared'
//import CreoLogo from './CreoLogo.jsx'
//import { Exit } from './Icons.jsx'
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
      console.log(e.target, ref.current)
      if (e.target === ref.current) {
        setter()
      }
    }

    addEventListener('click', clickHandler)

    return () => {
      console.log('modal closed')
      removeEventListener('click', clickHandler)

    }
  }, [active, setter])


    //{visibleItems.map((e)=>e)}  

  useEffect(() => {
    setVisibleItems(items.slice(0,5))
    setPage(1)

    const container = ref.current;
    const fireButton = btn.current;

    const loadMoreContent = () => {
      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container;
        console.log('Scroll position:', scrollTop);

        // Example: Trigger a function when scrolled to the bottom
        if (scrollTop + clientHeight >= scrollHeight - 300) {
          console.log('Reached the bottom!');
          //loadMore();
          if (fireButton) {
            fireButton.click()
          }
        }
      }
    };

    // Used for debouncing, as triggering function after every scroll would be too expensive
    let timeoutId;

    const handleScroll = () => {
      // Clear the previous timeout if it exists
      if (timeoutId) clearTimeout(timeoutId);

      // Set a new timeout to call setYaxis after some inactivity
      timeoutId = setTimeout( () => {
        loadMoreContent()
      }, 400); 
    };


    if (container) container.addEventListener('scroll', handleScroll, { passive: true });
    
    //Cleanup the event listener
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
    };

  }, [items])
  


  const loadMore = () => {
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
