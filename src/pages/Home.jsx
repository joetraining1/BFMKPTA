import React from 'react'
import Hero from './Hero'
import About from './About'
import FAQs from './FAQs'
import Procedure from './Procedure'

const Home = () => {
  return (
    <div style={{
      width: '100%',
      height: 'fit-content',
    }}>
      <Hero />
      <About />
      <FAQs />
      <Procedure />
    </div>
  )
}

export default Home
