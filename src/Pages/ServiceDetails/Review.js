import React, { useEffect, useState } from 'react';

const Review = ({review}) => {
    const { name, email,service, serviceName,  message } = review
   

    


    return (
        
        <div className="card m-5 w-full bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{serviceName}</h2>
                <p>{name}</p>
                <p>{email}</p>
                <p>{message}</p>
                
            </div>
            <div className="card-actions mb-5 justify-center">
                <button className="btn btn-warning">Edit Review</button>
                <button className="btn btn-success">Delete Review</button>
            </div>
        </div>


    );
};

export default Review;