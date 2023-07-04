import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <div style={{
      width: '100%',
      height: '6svh',
    }}>
      <div style={{
        margin: '0 auto',
        height: '100%',
        width: '1280px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <HashLink to='/#home-about'>About</HashLink>
      <HashLink to='/#home-faq'>FAQs</HashLink>
      <HashLink to='/#home-steps'>Guide</HashLink>
      </div>
    </div>
  )
}

export default Navbar
