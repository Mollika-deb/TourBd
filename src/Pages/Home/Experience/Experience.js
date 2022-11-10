import React from 'react';

const Experience = () => {
    return (
        <div className="experience  p-10">
           
                <h4 className="text-center text-orange-600 font-bold text-4xl m-5">WHY CHOOSE US</h4>
            <h1 className="text-center text-orange-600 font-semibold text-3xl m-5">Countless Experiences</h1>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 my-2 p-10'>

               
                <div className="experience-card bg-black rounded-xl p-3 text-white text-center ">
                      
                    <h2 className="text-center text-orange-600 font-semibold text-3xl ">Experienced</h2>
                        <p>
                            Average people say this to console themselves
                            when they feel helpless to make a positive
                            change in the world.
                        </p>
                    </div>
               
                
                <div className="experience-card  bg-black rounded-xl p-3 text-white text-center">
                       
                    <h2 className="text-center text-orange-600 font-semibold text-3xl ">Worldwide</h2>
                        <p>
                            Average people say this to give themselves
                            permission to meander all over the place rather
                            than set and achieve goals.
                        </p>
                    </div>
              
                
                <div className="experience-card  bg-black rounded-xl p-3 text-white text-center ">
                       
                    <h2 className="text-center text-orange-600 font-semibold text-3xl ">Cheap</h2>
                        <p>
                            Average people say this because it makes them
                            feel better to pretend is directing events in
                            their lives.
                        </p>
                    </div>
               
                
                <div className="experience-card  bg-black rounded-xl p-3 text-white text-center ">
              
                    <h2 className="text-center text-orange-600 font-semibold text-3xl ">24/7 Service</h2>
                        <p>
                            Trusted results for Your Search Query. Check
                            Visymo Search for the best results! Unlimited
                            Access. 100% Secure.
                        </p>
                    </div>
               

                </div>
            
        </div>
    );
};

export default Experience;