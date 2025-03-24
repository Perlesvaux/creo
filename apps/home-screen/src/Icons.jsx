//import {useRef, useEffect, useState} from 'react'
import css from './Icons.module.css'
import {useArrowButtons} from './Custom.js'

export function Right ({onClick}){
  const state = useArrowButtons(onClick, css.active, ['ArrowRight', 'ArrowDown', 'd', 's', 'D', 'S'])
    return <button onClick={onClick} className={`${css.button} ${css.right} ${state}`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M400-280v-400l200 200-200 200Z"/></svg></button>
}

export function Left({onClick}){
  const state = useArrowButtons(onClick, css.active, ['ArrowLeft', 'ArrowUp', 'a', 'w', 'A', 'W'])
  return <button  onClick={onClick} className={`${css.button} ${css.left} ${state}`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M560-280 360-480l200-200v400Z"/></svg></button>
}

export function Exit({onClick}){

  return <><button onClick={onClick} className={css.exit}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
  </button> <div className={css.exitBackground}> </div> </> 

}
