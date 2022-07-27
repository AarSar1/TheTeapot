import React from 'react'
import Head from 'next/head'
import { Navbar, Newsletter, Footer, Herobanner } from '../components/components'

const contact = () => {
    return (
        <>
            <Head>
                <title>contact</title>
            </Head>
            <main>
                <div id='contactNav' className='navParent'>
                    <Navbar />
                </div>
                <Herobanner />
                <p1> Welcome to our website! to contact us, please email the teapot @ teapot.com</p1>
                <Newsletter />
                <Footer />

            </main>
        </>
    )
}

export default contact