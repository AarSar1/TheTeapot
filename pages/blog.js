import React from 'react'
import Head from 'next/head'
import { Navbar, Newsletter, Footer } from '../components/components'

const blog = () => {
    return (
        <>
            <Head>
                <title>blog</title>
            </Head>
            <main>
                <div id='blogNav' className='navParent'>
                    <Navbar />
                    
                </div>
                    <Newsletter />
                    <Footer />
               
            </main>
        </>
    )
}

export default blog