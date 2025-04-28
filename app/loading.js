// app/loading.js
import Image from 'next/image'
import css from './loading.module.css'
export default function Loading() {
  return (
    <div className={css.loading}>
      <Image src="/assets/favicon.svg" height={120} width={120} alt="CREO" className={css.icon} />
    </div>
  )
}
