import css from './FireButton.module.css'

export default function FireButton({children}){


  return <button className={css.button}> {children} </button>
}
