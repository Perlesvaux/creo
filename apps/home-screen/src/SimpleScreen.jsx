import css from './SimpleScreen.module.css'

export default function SimpleScreen({collection}){

  return <div className={`${css.simpleScreen} ${css.vertical}`} >
    {collection}
  </div>
}
