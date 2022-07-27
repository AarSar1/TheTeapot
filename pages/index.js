import React from 'react'
import { client } from '../lib/client';
import { Navbar, Herobanner, Productscroll, Minibannerz, Newsletter, Footer, Extrabanner, Product } from '../components/components'

const home = ({products, bannerData}) => {
  return (
    <>
      <head>
        <link rel="icon" type="image/x-icon" href="../Assets/images/tpot new.png" />
        <title>The Teapot</title>

      </head>
      <main>
        <div id='homeNav' className='navParent'>
          <Navbar />
        </div>
        <Herobanner />
        <Productscroll />
        <Minibannerz />
        {/* <Extrabanner extraBanner={bannerData.length && bannerData[0]} /> */}
         {console.log(bannerData)}
         {console.log(products)}
        <div className = 'products-container'>
          {products?.map((product) => <Product key={
           product._id} product={product}/>)
          }
        </div>
        <Newsletter />
        <Footer />
       
      </main>
    </>
  )
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerquery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerquery);

  return {
    props: {products, bannerData}
  }


}
export default home