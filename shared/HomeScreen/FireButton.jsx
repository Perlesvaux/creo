import css from './FireButton.module.css'

export default function FireButton({children, to}){
  return <a href={`mailto:${to}`}   className={css.to} >
    <button className={css.button}> {children} </button>
  </a>
}
