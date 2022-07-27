import React from 'react'
import Head from 'next/head'
import { client } from '../lib/client';
import { Navbar, Newsletter, Footer, Extrabanner } from '../components/components'

const story = ({bannerData}) => {
    return (
        <>
            <Head>
                <title>story</title>
            </Head>
            <main>
                <div id='storyNav' className='navParent'>
                    <Navbar />
                </div>
                <Extrabanner extraBanner={bannerData.length && bannerData[0]} /> 
         {console.log(bannerData)}
                <Newsletter />
                <Footer />
            </main>
        </>
    )
}


export const getServerSideProps = async () => {
 

  const bannerquery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerquery);

  return {
    props: { bannerData}
  }


}
export default story