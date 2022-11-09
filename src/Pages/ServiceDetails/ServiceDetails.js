import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {title, img, description, price} = useLoaderData();
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
            <form >
                <div className="grid grid-cols-1 mt-6 lg:grid-cols-2 gap-4">
                    <input name="firstName" type="text" placeholder="First name" className="input input-bordered w-full " />

                    <input name="email" type="text" placeholder="Your Email" className="input input-bordered w-full " />
                </div>
                <textarea name="message" className="textarea textarea-secondary h-24 w-full mt-3" placeholder="your messages"></textarea>
                <input className='btn  mb-3' type="submit" value="place your order" />
            </form>
        </div>
    );
};

export default ServiceDetails;