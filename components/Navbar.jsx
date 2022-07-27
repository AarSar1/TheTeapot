import React from 'react'
import Link from 'next/link'

const tpot = new URL('../Assets/images/tpot.png', import.meta.url)
const Cart = new URL('../Assets/images/Shoppers.png', import.meta.url)

const Navbar = () => {
  return (
    <section id="exNav" class="headerNav">
      <Link href="/" style={{ color: '#088178', width: '25%', display: 'flex', height: '100%', alignItems: 'baseline', }}>
        <div>
          <img src={tpot} className='logo' href='/' />
          <h2 style={{ fontSize: '20px', margin: '0 1%', }} >The Teapot</h2>
        </div>
      </Link>
      <div style={{ width: '80%', }}>
        <ul id="navbar">
          <Link href='/'>
            <li><a className="homeLink" position="sticky">Home</a></li>
          </Link>
          <Link href='/shop'>
            <li><a id="shopLink">Shop</a></li>
          </Link>
          <Link href='/story'>
            <li><a id="storyLink">Our story</a></li>
          </Link>
          <Link href='/blog'>
            <li><a id="blogLink">Blog</a></li>
          </Link>
          <Link href='/contact'>
            <li><a id="contactLink" >Contact</a></li>
          </Link>
          <Link href='/cart'>
            <li><a id="cartLink"><img src={Cart} width="40" height="40" /></a></li>
          </Link>
        </ul>
      </div>
    </section>
  )
}

export default Navbar