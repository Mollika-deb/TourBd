import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import logo from '../../../images/logo/icon1.png'

const Header = () => {
   const {user, logOut} = useContext(AuthContext)
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
       
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/myreview'>My Review</Link></li>
        <li><Link to='/addservice'>Add Service</Link></li>
        
        
        {
            user?.uid?
               
                <button onClick={logOut} className="btn btn-outline btn-accent">Sign Out</button>
            :
            <>
                   
                    <li><Link to='/login'>Sign In</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                   
            </>

        }
       
      
     
       
    
    </>

    return (
        <div className="navbar h-20  text-slate-200 font-semibold bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                   
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                <img src={logo} alt="" />
                    <h3 className='text-red-700'>TourBD</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                
            </div>
        </div>
    );
};

export default Header;