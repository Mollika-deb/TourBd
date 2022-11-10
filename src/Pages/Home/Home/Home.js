import React from 'react';
import Another from '../Another/Another';
import Banner from '../Banner/Banner';
import Experience from '../Experience/Experience';
import Services from '../Services/Services';

const Home = () => {
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