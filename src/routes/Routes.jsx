import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import AddBlog from "../Pages/AddBlog";
import PrivateRoute from "./PrivateRoute";
import AllBlog from "../Pages/AllBlog";
import FeaturedBlog from "../Pages/FeaturedBlog";
import WishList from "../Pages/WishList";
import BlogDetails from "../Pages/BlogDetails";
import UpdateBlog from "../Pages/UpdateBlog";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h1>ERROR PAGE</h1>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },

            {
                path: "register",
                element: <Register></Register>
            },

            {
                path: "signin",
                element: <SignIn></SignIn>
            },

            {
                path: "addBlog",
                element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
            },

            {
                path: "allBlog",
                element: <AllBlog></AllBlog>
            },

            {
                path: "blogs/:id",
                element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://bohopeople-server-side.vercel.app/blogs/${params.id}`)
            },

            {
                path: "update-blog/:id",
                element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
                loader: ({ params }) => fetch(`https://bohopeople-server-side.vercel.app/blogs/${params.id}`)
            },

            {
                path: "featuredBlog",
                element: <FeaturedBlog></FeaturedBlog>
            },

            {
                path: "wishlist",
                element: <PrivateRoute><WishList></WishList></PrivateRoute>
            }
        ]
    },
    ]);


export default router;