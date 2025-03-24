import {useState} from 'react'
import css from './Card.module.css'
//import Modal from './Modal.jsx'
import { Modal } from 'shared'
export default function Card({thumb, items}) {
  const [isOpen, setIsOpen] = useState(false)
  const open  = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return  <>
    <img src={thumb} onClick={open} />
    <Modal active={isOpen} setter={close} items={items} />
  </> 
}
