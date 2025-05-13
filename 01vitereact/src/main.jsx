import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
    <div>
      <h1>Custon App | chai</h1>
    </div>
  )
}

/*
const ReactElement={
  type: 'a',
  props: {
      href:'https://google.com',
      target: '_blank'
  },
  children: 'click me to visit google'
}
  */

const anotherElement=(
  <a href="https://google.com" target='_blank'>VISIT GOOGLE</a>
)

const user='chai aur react'

const reactElement=React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  'click me to visit google',
  user
)

createRoot(document.getElementById('root')).render(
 

reactElement


)
