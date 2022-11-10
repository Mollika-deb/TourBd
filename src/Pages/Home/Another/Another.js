import React from 'react';
import img from '../../../images/banner/banner4.jpg'

const Another = () => {
    return (
        <div className="hero min-h-fit mb-10" >
        <img className='w-full' src={img} alt="" />
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Enjoy Your Journey</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Let's Go</button>
                </div>
            </div>
        </div>
    );
};

export default Another;