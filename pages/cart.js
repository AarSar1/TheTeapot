import React from 'react'
import Head from 'next/head'
import { Navbar, Newsletter, Footer } from '../components/components'

const cart = () => {
    return (
        <>
            <Head>
                <title>Cart</title>
            </Head>
            <main>
                <div id='cartNav' className='navParent'>
                    <Navbar />
                   
                </div>
                    <Newsletter />
                    <Footer />
               
            </main>
        </>
    )
}

export default cart