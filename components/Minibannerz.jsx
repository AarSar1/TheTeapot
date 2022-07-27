import React from 'react'
import Link from 'next/link'
const Minibannerz = () => {
  return (
    <>
     <section id="sm-banner"className="section-p1">
        <div className="banner-box" id="banneruno">
            <h4>Latest Deals</h4>
            <h2>Buy 1 get 1 free</h2>
            <span>The best Chamomile teas are on sale at The Teapot</span>
            <Link href='/shop'>
            <button className="bb">Learn More</button>
            </Link>
        </div>
        <div className="banner-box" id="b2">
            <h4>Latest Deals</h4>
            <h2>40% 0ff</h2>
            <span>All turmeric teas are on sale</span>
            <Link href='/shop'>
            <button className="bb">Learn More</button>
            </Link>
        </div>

    </section>
    <section id="banner3">
        <div className="banner-box"id="br1">
            <h2>Season's sales!</h2>
            <h3>Ginger and rose teas - 50% off</h3>
        </div>
        <div className="banner-box"id="br2">
            <h2>Season's sales!</h2>
            <h3>Peppermint teas - 45% off</h3>
        </div>
        <div className="banner-box"id="br3">
            <h2>Season's sales!</h2>
            <h3>Ginger and rose teas - 50% off</h3>
        </div>
    </section>
    </>
    
  )
}

export default Minibannerz