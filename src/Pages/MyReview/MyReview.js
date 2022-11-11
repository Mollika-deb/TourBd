import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hookes/useTitle';
import Review from '../ServiceDetails/Review';

const MyReview = () => {

    useTitle('MyReview')
  
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    

    useEffect(() => {
        fetch(`https://assignment-11-server-zeta-umber.vercel.app/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.firstName.value;
        const email = form.email.value;
        const message = form.message.value;


        const review = {
            
            
            email,
            name,
            message
        }

        fetch('https://assignment-11-server-zeta-umber.vercel.app/reviews', {
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
           <div >
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }  
           </div>

        <h2>{reviews.length}</h2>
            <form onSubmit={handleReview}>
                <div className="grid grid-cols-1 mt-6 lg:grid-cols-2 gap-4">
                    <input name="firstName" type="text" placeholder="First name" className="input input-bordered w-full " />

                    <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full " />
                </div>
                <textarea name="message" className="textarea textarea-secondary h-24 w-full mt-3" placeholder="your messages"></textarea>
                <input className='btn justify-center  m-3' type="submit" value="post your review" readOnly/>
            </form> 

           

        </div>
    );
};

export default MyReview;