import React from 'react';

const Review = ({review}) => {
    const { name, email, message } = review


    return (
        <tr>
            <th>
                
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        
                    </div>
                </div>
            </td>
            <td>
              
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{message}</td>
            
        </tr>


    );
};

export default Review;