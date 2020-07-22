import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

export default function Contact () {
  return (
    <div id='main'>
      <h1><strong>Contact Information</strong></h1>
      <p><strong>Email: <a href='mailto:coteausten@gmail.com'>coteausten@gmail.com</a></strong></p>
      <p>Resume: <a id='links' href='https://docs.google.com/document/d/197Uve1Lh3oRWZRCJN9dJ4gYwGE122mDh-XCi8latn_0/edit?usp=sharing'><em>Austen Cote</em></a></p>
      <a href='https://github.com/aust10'><i id='icon' className='fa fa-github fa-5x' aria-hidden='true' /></a>
      <a href='https://www.linkedin.com/in/austen-cote/'><i id='icon' className='fa fa-linkedin-square fa-5x' aria-hidden='true' /></a>
      <p id='footer'>Produced By:<a id='links' href='https://austencote.com'> Austen Cote</a> </p>
    </div>
  )
}
