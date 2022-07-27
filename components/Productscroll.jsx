import React from 'react'
import Link from 'next/link'
/* Hello Future Me. This is temporary until I can figure out how to do the other productscroll thingy*/

const Productscroll = () => {
  return (
    <>
    <h4 className = "text-1">Bestsellers</h4>
    <section id="feature" className="section-p1">
        
 
        <div className="fe-box">
            <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/08/tulsi-plant-1564795386-1564896914.jpg" alt=""/>
            <h6>Organic tulsi tea</h6>
        </div>

        <div className="fe-box">
            <img src="https://assets.epicurious.com/photos/5763132cff66dde1456dfed0/5:4/w_1660,h_1328,c_limit/Mint_Leaves.jpg" alt=""/>
            <h6>Organic peppermint tea</h6>
        </div>

        <div className="fe-box">
            <img src="https://blog.lafco.com/wp-content/uploads/2020/05/chamomile.jpg" alt=""/>
            <h6>Organic chamomile tea</h6>
        </div>

        <div className="fe-box">
            <img src="https://www.manilaspoon.com/wp-content/uploads/2012/09/Chai-Tea-1.jpg" alt=""/>
            <h6>Organic chai tea</h6>
        </div>

        <div className="fe-box">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-turmeric-on-table-royalty-free-image-890928998-1532356554.jpg" alt=""/>
            <h6>Organic turmeric tea</h6>
        </div>

        
        
    </section>
    </>
  )
}

export default Productscroll