import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import logo from './../assets/logo/BOHO.png'
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const links = 

<>

<NavLink
className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning transition hover:scale-110'}`}
to="/">Home</NavLink>

<NavLink 
className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning transition hover:scale-110'}`}
to="/addBlog">Add Blog</NavLink>

<NavLink
className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning transition hover:scale-110'}`} 
to="/allBlog">All Blogs</NavLink>

<NavLink
className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning transition hover:scale-110'}`} 
to="/featuredBlog">Featured Blogs</NavLink>

<NavLink
className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning transition hover:scale-110'}`} 
to="/wishlist">Wishlist</NavLink>

</>


const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);


    const handleSignOut = () => {
        signOutUser()
        .then(result => {
            Swal.fire({
                icon: "success",
                title: "Congratulation!",
                text: "Successfully Sign Out!",
            });
        })
        .catch(error => {
            alert('Something went wrong!');
        })
    }


return (

<div className=" backdrop-blur-md shadow-lg text-white fixed w-full top-0 z-50">
    <div className="navbar my-6">
    <div className="navbar-start">
    <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
    </div>
    <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-4 uppercase">
        {links}
    </ul>
    </div>
    <button className="btn p-0"><img className="w-14 h-12 rounded-md transition hover:scale-110" src={logo} alt="" /></button>
    <h3 className="text-3xl font-bold text-blue-600 ml-4 transition hover:scale-110">BOHO PEOPLE</h3>
</div>
<div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-8 text-xl font-medium uppercase text-gray-500">
    {links}
    </ul>
</div>
<div className="navbar-end space-x-4">

    {
    user ? 
    <div className="flex items-center gap-6 ">
    <h3 className="text-xl font-semibold hover:text-warning transition hover:scale-110">{user.email}</h3>
    <button 
    onClick={handleSignOut}
    className="btn bg-blue-600 text-white text-xl border-none">Sign Out</button>
    </div>
    :
    <>
    <Link className="underline text-xl font-semibold hover:text-warning transition hover:scale-110" to="/register">Register</Link>
    <Link to="/signin"><button className="btn bg-blue-600 text-white border-none text-xl">Sign In</button></Link>
    </>
    }

</div>
</div>
</div>
    );
};

export default Navbar;