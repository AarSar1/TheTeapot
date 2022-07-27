import React from 'react'
import Link from 'next/link'

const Herobanner = () => {
  return (
    <>
      <section id="hero">

        <h2>Today's specials</h2>
        <h2>Best sellers</h2>
        <h1>And more</h1>
        <Link href='/shop'>
          <button>
            {/*  onclick="" */}
            Shop Now!
          </button>
        </Link>
      </section>
    </>
  )
}

export default Herobanner