import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({service}) => {
    const{img, _id,  title, description, price} = service;
    return (
        <div className="card mt-5 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img  src={img} alt="Shoes" className="rounded-xl 'h-96'" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100)}....</p>
                <p>{price}</p>
                <div className="card-actions">
                    <Link to={`/servicedetails/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;