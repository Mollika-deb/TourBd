import React from 'react';
import img1 from '../../../images/banner/banner6.jpeg'
import img2 from '../../../images/banner/banner5.webp'
import img3 from '../../../images/banner/banner6.jpeg'
import img4 from '../../../images/banner/banner5.webp'

import BannerItem from './BannerItem';


const Banner = () => {

    const bannerData = [
    {
        image: img1,
        prev: 4,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 1
    }
]

    return (
        <div className="carousel w-full pt-16">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}>
                </BannerItem>)
            }
           
            
        </div>
    );
};

export default Banner;