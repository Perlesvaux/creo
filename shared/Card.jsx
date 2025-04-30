"use client"
import Image from 'next/image'
import { useState } from 'react'
import css from './Card.module.css'
import { Modal } from 'shared'

export default function Card({thumb, items, desc, alt}) {
  const [isOpen, setIsOpen] = useState(false)
  const open  = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const [W, H] = [process.env.NEXT_PUBLIC_CARD_W, process.env.NEXT_PUBLIC_CARD_H].map(dimension => Number(dimension))

  return  <>
    <Image src={thumb} onClick={open} width={W} height={H} placeholder="blur" loading="lazy" alt={alt} />
    { desc && <span className={css.desc}>{desc}</span> }
    <Modal active={isOpen} setter={close} items={items} />
  </> 
}

