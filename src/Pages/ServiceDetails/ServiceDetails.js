import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Review from './Review';

const ServiceDetails = () => {
    const {title, img, description, price} = useLoaderData();
    
    


    // url = `http://localhost:5000/reviews?email=${user.email}`

    // useEffect(()=>{
    //     fetch("https://assignment-11-server-zeta-umber.vercel.app/reviews")
    //     .then(res => res.json())
    //     .then(data => setReviews(data))
    // },[])

    
   
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>{price} TK</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
           
            <Link to='/myreview'> <input className='btn  mb-3' type="submit" value="post your review" /></Link>

            
          

        </div>
    );
};

export default ServiceDetails;