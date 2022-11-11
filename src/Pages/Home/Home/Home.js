import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../hookes/useTitle';
import AddItem from '../../AddService/AddItem/AddItem';
import Another from '../Another/Another';
import Banner from '../Banner/Banner';
import Experience from '../Experience/Experience';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home')


    // const { user } = useContext(AuthContext)
    // const [addItem, setAddItem] = useState([]);

    // useEffect(() => {
    //     fetch(`https://assignment-11-server-zeta-umber.vercel.app/reviews?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setAddItem(data))
    // }, [user?.email])


    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           
           <Experience></Experience>
           <Another></Another>
        </div>
    );
};

export default Home;