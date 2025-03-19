import { Link, useLocation, useNavigate } from "react-router-dom";
import SectionTitle from "../Components/SectionTitle";
import useBlog from "../hooks/useBlog";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";


const AllBlog = () => {

    const [blogs, , refetch] = useBlog();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();


    const handleAddToWishlist = (item) => {

        if(user.email) {

            // send cart item to the database
            const listItem = {
                listId: item._id,
                email: user.email,
                category: item.category,
                image: item.image,
            }
            axiosSecure.post("/wishlist", listItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "middle",
                        icon: "success",
                        title: `This Blog Added to your wishlist`,
                        showConfirmButton: true,
                    });
                    // refetch cart to update the cart items count
                    refetch();
                }
            })

        } else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
                }).then((result) => {
                if (result.isConfirmed) {
                    //  send the user to the login page
                    navigate('/signin', {state: {from: location}})
                }
            });
        }
    }


    return (

        <div className="bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] py-24">

        <Helmet>
            <title>BOHO PEOPLE | ALL BLOGS</title>
        </Helmet>

        <div>
            <SectionTitle
        heading={'🚀 Explore Our Blogs'}
        subHeading={"Dive into a world of insights, inspiration, and information. Whether you're looking for the latest in technology, health tips, travel guides, or lifestyle hacks, our collection of blogs has something for everyone. Start exploring and discover topics that captivate your interest!"}></SectionTitle>

        </div>

<div className="md:w-10/12 lg:w-9/12 mx-12 md:mx-auto">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{
    blogs.map((item, idx) => 
    <div 
    key={idx}
    className="">
        <div>
            <img className="w-[480px] h-96 object-cover" src={item.image} alt="" />
        </div>
        <h3 className="text-lg font-medium mb-3 mt-6 flex items-center gap-3"> Category : {item.category}</h3>
        <h2 className="text-lg font-medium my-3 flex items-center gap-3">Author : {item.author_name}</h2>
        <h3 className="text-lg font-medium my-3 flex items-center gap-3">Date & Time : {item.date_time}</h3>
        <p className="text-base font-normal text-gray-600 my-3">{item.long_description.slice(0, 120)}... <Link to={`/blogs/${item._id}`} className="underline text-black hover:text-blue-500">See More</Link></p>

        <div className="flex justify-between items-center">

        <Link to={`/blogs/${item._id}`}><button className="btn text-base font-medium bg-blue-500 text-white my-3 uppercase rounded-none">Details</button></Link>

        <button 
        onClick={() => handleAddToWishlist(item)}
        className="btn text-base font-medium bg-blue-500 text-white my-3 rounded-none">ADD WISHLIST</button>

        </div>
    </div>)
}


</div>
</div>
</div>

);
};

export default AllBlog;