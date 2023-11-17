import React from 'react'

export const Header = () => {
  return (
    <header>
      <a href='/' className='logo'>
          <img src={Logo} alt='Routmate Logo'/>
          <span> Routmate</span>
      </a>
      <nav className='navigation'>
        <a href='/' className='link'>Home</a>
        <a href='/products' className='link'>Products</a>
        <a href='/contact' className='link'>Contact</a>

    </header>
  )
}
