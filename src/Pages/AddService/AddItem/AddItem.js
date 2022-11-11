import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AddItem = ({ item }) => {
    const {user, title, price, details} = useContext(AuthContext)
    return (
        <div className="card  bg-base-100 shadow-xl image-full">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-3xl font-semibold'>{price}</p>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">view Details</button>
                </div>
            </div>
        </div>
    );
};

export default AddItem;