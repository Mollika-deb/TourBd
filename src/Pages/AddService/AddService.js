import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hookes/useTitle';
import AddItem from './AddItem/AddItem';

const AddService = () => {
    useTitle('Add Service');
    const {user} = useContext(AuthContext)
    const [addItem, setAddItem] = useState([]);

    // useEffect(() => {
    //     fetch(`https://assignment-11-server-zeta-umber.vercel.app/reviews?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setAddItem(data))
    // }, [user?.email])

   


    const handleAddService = (event) => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const details = form.details.value;


        const addService = {
            title, price, details
        }


        fetch('https://assignment-11-server-zeta-umber.vercel.app/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(addService),

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
                alert('Service added ')
                form.reset();
            }
        })
        .catch(err => console.error(err))
    }

    return (
        <div>
         <form onSubmit={handleAddService} className="card-body">
                        <div className="form-control">
                           
                            <input type="text" name='title' placeholder="title" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            
                            <input type="text" name='price' placeholder="price" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control">
                            
                            <input type="text" name='details' placeholder="Description" className="input input-bordered" />
                           
                        </div>
                        
                        <div className="form-control mt-6">
                            <input className="btn bg-orange-500" type="submit" value="add service" />

                        </div>
                    </form>
                    <div>
                {
                    addItem.map(item => <AddItem
                        key={item._id}
                        item={item}
                    ></AddItem>)
                }
                    </div>                       


        </div>

       

         

                    
                  
    );
};

export default AddService;