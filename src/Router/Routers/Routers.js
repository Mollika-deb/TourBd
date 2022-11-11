import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServiices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import LogOut from "../../Pages/LogOut/LogOut";
import MyReview from "../../Pages/MyReview/MyReview";
import Review from "../../Pages/ServiceDetails/Review";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Signup from "../../Pages/Signup/Signup";
import PrivateRout from "../../PrivateRoute/PrivateRout";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allservices',
                element:<AllServices></AllServices>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/myreview',
                element: <PrivateRout><MyReview></MyReview></PrivateRout>
               
            
            },
            {
                path:'/addservice',
                element: <PrivateRout><AddService></AddService></PrivateRout>
               
            
            },
            {
                path:'/logout',
                element:<LogOut></LogOut>
               
            
            },
            {
                path:'/servicedetails/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://assignment-11-server-zeta-umber.vercel.app/services/${params.id}`)
            }
        ]
    }
])

export default router;