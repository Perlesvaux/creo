import css from './Quotes.module.css'
import Quote from './Quote.jsx'

const quotes = [
  {"author": "Jack Ma", "quote": "Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine."},
  {"author": "Jack Ma", "quote": "If you don’t give up, you still have a chance. Giving up is the greatest failure."},
  {"author": "Jack Ma", "quote": "Opportunities lie in the place where the complaints are."},
  {"author": "Jack Ma", "quote": "It’s not the technology that changes the world, it’s the dreams behind the technology."},
  {"author": "Jack Ma", "quote": "A leader should never compare his technical skills with his employees’."},
  {"author": "Jack Ma", "quote": "You should learn from your competitor, but never copy. Copy and you die."},
  {"author": "Jack Ma", "quote": "The very important thing you should have is patience."},
  {"author": "Jack Ma", "quote": "Small is beautiful, small is powerful."},
  {"author": "Jack Ma", "quote": "Help young people. Help small guys. Because small guys will be big."},
  {"author": "Jack Ma", "quote": "If we are a good team and know what we want to do, one of us can defeat ten of them."},
  
  {"author": "Allen Zhang", "quote": "A good product should be like a good friend—it understands you without needing to be told."},
  {"author": "Allen Zhang", "quote": "The best technology is invisible. Users should feel the value, not the complexity."},
  {"author": "Allen Zhang", "quote": "If a product needs a manual to explain how to use it, it has already failed."},
  {"author": "Allen Zhang", "quote": "Design is not about beauty; it’s about rationality."},
  {"author": "Allen Zhang", "quote": "The most powerful feature is often the one you choose not to add."},
  {"author": "Allen Zhang", "quote": "The essence of WeChat is to be a tool, not an entertainment platform."},
  {"author": "Allen Zhang", "quote": "Don’t chase trends. Solve real problems in the simplest way possible."},
  {"author": "Allen Zhang", "quote": "The best user experience is when the user doesn’t even notice the design."},
  {"author": "Allen Zhang", "quote": "If your product requires a lot of marketing to succeed, maybe the product itself is the problem."},
  {"author": "Allen Zhang", "quote": "Stay foolish, stay hungry—but also stay simple."},
  
  {"author": "David Ogilvy", "quote": "Don’t bunt. Aim out of the ballpark."},
  {"author": "David Ogilvy", "quote": "The consumer isn’t a moron; she is your wife."},
  {"author": "David Ogilvy", "quote": "You cannot bore people into buying your product; you can only interest them in buying it."},
  {"author": "David Ogilvy", "quote": "The best ideas come as jokes. Make your thinking as funny as possible."},
  {"author": "David Ogilvy", "quote": "On average, five times as many people read the headline as read the body copy."},
  {"author": "David Ogilvy", "quote": "The most important word in the vocabulary of advertising is TEST."},
  {"author": "David Ogilvy", "quote": "First, make yourself a reputation for being a creative genius. Second, surround yourself with partners who are better than you. Third, leave them to get on with it."},
  {"author": "David Ogilvy", "quote": "Never stop testing, and your advertising will never stop improving."},
  {"author": "David Ogilvy", "quote": "We sell or else."},
  {"author": "David Ogilvy", "quote": "The pursuit of excellence is less profitable than the pursuit of bigness, but it can be more satisfying."}
]

export default function Quotes(){

  const size = quotes.length

  function randomQuote() {
    const index = Math.floor(Math.random() * (size)) + 1;
    return quotes[index]
  }

  const quote = randomQuote()

  if (!quote) return <div> ... loading ... </div>

  return <i className={css.quote} >
    <Quote invert={true} fill="white" />
    {quote.quote}
    <Quote fill="white" /> <br />
    <strong> — {quote.author} </strong>
  </i>

}




