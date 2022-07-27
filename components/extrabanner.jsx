import React from 'react';
import { urlFor } from '../lib/client';
import Link from 'next/link';
const extraBanner = ({extraBanner}) => {
  return (
    <>
    <p className=''>{extraBanner.smallText}</p>
    <h3>{extraBanner.mediumText}</h3>
    <h1>{extraBanner.largeText1}</h1>
    <img src={urlFor(extraBanner.image)} alt="tea"
    className='extraBanner img' />
    <div>
        <Link href={`/product/${extraBanner.product}`}>
            <button type="button">{extraBanner.buttonText}</button>
        </Link>
    </div>
    <div className=''>    
        <h5>Description</h5>
        <p>{extraBanner.desc}</p>
    </div>

    </>
  )
}

export default extraBanner
