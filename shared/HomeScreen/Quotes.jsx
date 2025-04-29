"use client"
import { useEffect, useState } from 'react'
import css from './Quotes.module.css'
import Quote from './Quote.jsx'

const quotes = [
  {"author": "Jack Ma", "quote": "Opportunities lie in the place where the complaints are."},
  {"author": "Jack Ma", "quote": "A leader should never compare his technical skills with his employees’."},
  {"author": "Jack Ma", "quote": "You should learn from your competitor, but never copy. Copy and you die."},
  {"author": "Jack Ma", "quote": "The very important thing you should have is patience."},
  {"author": "Jack Ma", "quote": "Help young people. Help small guys. Because small guys will be big."},
  {"author": "Jack Ma", "quote": "If we are a good team and know what we want to do, one of us can defeat ten of them."},
  
  {"author": "Allen Zhang", "quote": "A good product should be like a good friend—it understands you without needing to be told."},
  {"author": "Allen Zhang", "quote": "The best technology is invisible. Users should feel the value, not the complexity."},
  {"author": "Allen Zhang", "quote": "If a product needs a manual to explain how to use it, it has already failed."},
  {"author": "Allen Zhang", "quote": "The most powerful feature is often the one you choose not to add."},
  {"author": "Allen Zhang", "quote": "Don’t chase trends. Solve real problems in the simplest way possible."},
  {"author": "Allen Zhang", "quote": "The best user experience is when the user doesn’t even notice the design."},
  {"author": "Allen Zhang", "quote": "A good product doesn’t need to be loud; it speaks for itself."},
  {"author": "Allen Zhang", "quote": "Simplicity is the ultimate sophistication in design."},
  
  {"author": "David Ogilvy", "quote": "You cannot bore people into buying your product; you can only interest them in buying it."},
  {"author": "David Ogilvy", "quote": "The best ideas come as jokes. Make your thinking as funny as possible."},
  {"author": "David Ogilvy", "quote": "The most important word in the vocabulary of advertising is TEST."},
  {"author": "David Ogilvy", "quote": "First, make yourself a reputation for being a creative genius. Second, surround yourself with partners who are better than you. Third, leave them to get on with it."},
]

export default function Quotes() {
  const [quote, setQuote] = useState({author:'', quote:''})

  useEffect(()=>{
    // This runs only on the client after hydration
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }
  , [])


  return (
    <i className={css.quote}>
      <Quote invert={true} fill='white' />
      {quote.quote === '' ? 'loading...' : quote.quote}
      <Quote fill='white' /> <br />
      <strong> — {quote.author === '' ? 'loading...' : quote.author} </strong>
    </i>
  )
}





