import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hookes/useTitle';
import icon from '../../images/banner/icon2.png'

const Login = () => {
    useTitle('Signin')

    const { signIn, googleProviderLogIn } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleProviderLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => console.log(error));
    };

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)

            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => console.log(error))

    }

    return (
        <div className="hero w-full my-20 ">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img src={icon} alt="" />
                    <button onClick={handleGoogleSignIn} className="btn btn-success px-10 font-semibold text-white py-3 m-5">Sign In With Google</button>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center pt-4">Sign In!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-orange-500" type="submit" value="SignIn" />

                        </div>
                    </form>
                    <p className='text-center mb-6'>New to TourBD ? <Link className='font-bold text-orange-600 ' to='/signup'>Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;