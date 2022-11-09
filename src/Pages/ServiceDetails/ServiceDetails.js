import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Review from './Review';

const ServiceDetails = () => {
    const {title, img, description, price} = useLoaderData();
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const {name, email, message} = reviews


    // url = `http://localhost:5000/reviews?email=${user.email}`

    useEffect(()=>{
        fetch("http://localhost:5000/reviews")
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.firstName.value ;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        

        const review = {
            email,
            name,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review),

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Review posted successfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }

   
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
            <form onSubmit={handleReview}>
                <div className="grid grid-cols-1 mt-6 lg:grid-cols-2 gap-4">
                    <input name="firstName" type="text" placeholder="First name" className="input input-bordered w-full " />

                    <input name="email" type="text" placeholder="Your Email" className="input input-bordered w-full " />
                </div>
                <textarea name="message" className="textarea textarea-secondary h-24 w-full mt-3" placeholder="your messages"></textarea>
                <input className='btn  mb-3' type="submit" value="post your review" />
            </form>

            <h2 className="text-4xl">You have {reviews.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                  
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    
                      {
                            reviews.map(review =><Review
                                key ={review._id}
                                review={review}
                                ></Review>)
                      }  
                       
                    </tbody>
                    
                </table>
            </div>

        </div>
    );
};

export default ServiceDetails;