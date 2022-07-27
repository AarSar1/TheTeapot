import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';
import { TiStar, TiStarOutline } from "react-icons/ti";

const Product = ({ product: { image, name, slug, price } }) => {
    return (
        <>
            {image && (
                <div>
                    <Link href={`/product/${slug.current}`}>
                        <div className='product-card'>
                            <div className='product-rating'>
                                <TiStar className='star-rating' />
                                <TiStar className='star-rating'/>
                                <TiStar className='star-rating' />
                                <TiStarOutline className='star-rating'/>
                            </div>
                            <img
                                src={urlFor(image && image[0])}
                                width={250}
                                height={250}
                                className='product-image'
                            />

                            <p className='product-name'>
                                {name}
                            </p>
                            <p className='product-price'>${price}</p>


                        </div>
                    </Link>
                </div>
            )}
        </>
    )
}

export default Product