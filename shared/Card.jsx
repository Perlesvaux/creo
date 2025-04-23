"use client"
import Image from 'next/image'
import { useState } from 'react'
import css from './Card.module.css'
//import Modal from './Modal.jsx'
import { Modal } from 'shared'
export default function Card({thumb, items, desc, alt}) {
  const [isOpen, setIsOpen] = useState(false)
  const open  = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return  <>
    <Image src={thumb} onClick={open} width={50} height={50} placeholder="blur" loading="lazy" alt={alt} />
    { desc && <span className={css.desc}>{desc}</span> }
    <Modal active={isOpen} setter={close} items={items} />
  </> 
}

