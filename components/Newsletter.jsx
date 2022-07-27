import React from 'react'

const Newsletter = () => {
  return (
    <section id="newsletter"className="section-p1">
        <div className="newstext">
            <h4>Sign Up for Newsletters</h4>
            <p>Get updates about our latest teas and <span>special </span>offers.</p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your email address"/>
            <button>Sign Up</button>
        </div>
    </section>
  )
}

export default Newsletter