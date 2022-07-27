import React from 'react'
import Head from 'next/head'
import { Navbar, Newsletter, Footer } from '../components/components'

const shop = () => {
    return (
        <>
            <Head>
                <title>Shop</title>
            </Head>
            <main>
                <div id='shopNav' className='navParent'>
                    <Navbar />
                </div>
                <Newsletter />
                <Footer />
            </main>
        
        </>
    )
}

export default shop