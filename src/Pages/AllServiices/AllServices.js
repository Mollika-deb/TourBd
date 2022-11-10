import React, { useEffect, useState } from 'react';
import ServiceItem from '../Home/Services/ServiceItem';

const AllServices = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-zeta-umber.vercel.app/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            {
                services.map(service => <ServiceItem
                    key={service._id}
                    service={service}
                    >
                </ServiceItem>)
            }
        </div>
    );
};

export default AllServices;