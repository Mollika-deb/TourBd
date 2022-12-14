import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceItem from './ServiceItem';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-zeta-umber.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            {
                services.map(service => <ServiceItem
                    key={service._id}
                    service={service}
                ></ServiceItem>)
            }
            <Link to='/allservices'> <button className="btn btn-success text-white mb-4 ">See All</button></Link>
        </div>
    );
};

export default Services;