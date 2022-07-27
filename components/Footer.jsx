import React from 'react'
const tpot = new URL('../Assets/images/tpot.png', import.meta.url)
const follow = new URL('../Assets/images/follow.png', import.meta.url)
const Footer = () => {
  return (
    <>
    <footer class="section-p1">
    <div class="col">
        <img class='logo1' src={tpot} alt="" width="76" height="50"/>
        <h4>Contact</h4>
        <p><strong>Address:</strong> 123, shop street, Austin TX, 12345</p>
        <p><strong>Hours:</strong> 9:00AM - 5:00PM, Mon - Fri</p>
      </div>
    <div className='follow'>
            <h4>Follow us</h4>
            <div className="Icon">
                <img src= {follow} width="100"height="27"/>
            </div>
        </div>
        <div className='col'>
            <h4>About</h4>
            <a href = "#"> About us</a>
            <a href = "#"> Delivery info</a>
            <a href = "#">Terms and conditions </a>
            <a href = "#">Contact us</a>
        </div>
        <div className="col">
            <h4>My account</h4>
            <a href = "#"> Sign in</a>
            <a href = "#"> View Cart</a>
            <a href = "#">My Wishlist </a>
            <a href = "#">Track Order</a>
            <a href = "#">Assistance</a>
        </div>
        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
                <img src ="" alt=""/>
                <img src ="" alt=""/>
            </div>
            <p>Secured Payment Gateways</p>
            <img src ="" alt=""/>
            <div className="copyright">
               

        </div>



    </div>   
    </footer>
    <h3>© 2022 The Teapot, All rights reserved</h3>
    </>
  )
}

export default Footer