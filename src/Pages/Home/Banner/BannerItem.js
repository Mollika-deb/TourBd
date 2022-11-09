import React from 'react';
import './banner.css'

const BannerItem = ({ slide}) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative  w-full">
            <div className='slider-img'>
                <img src={image} alt="" className="w-full rounded-xl " />
            </div>
            <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 top-1/3">
                <h1 className="text-5xl text-white font-semibold">Lets' Tour, Enjoy Life <br /> & Explore The World </h1>

            </div>
            <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 top-1/2">
                <p className='text-white pt-20'>Let a Travel Consultant Help You Decide Where to Go. <br /> Contact Us for Information Today. <br /> A Travel Consultant Can Help You Find a Great Trip . Call Us Now.
                </p>

            </div>

            <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0 justify-end">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;