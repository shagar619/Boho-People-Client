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

        <div className="bg-white mx-12 md:mx-24">

        <Helmet>
            <title>BOHO PEOPLE | ALL BLOGS</title>
        </Helmet>

        <div className="pb-56 bg-blue-100 pt-12 mb-12 px-16">

        <div>

            <h1 className="uppercase text-center text-4xl font-bold text-blue-800 underline mt-36">All Blogs</h1>

            <SectionTitle
        heading={'Explore Our Blogs'}
        subHeading={"Dive into a world of insights, inspiration, and information. Whether you're looking for the latest in technology, health tips, travel guides, or lifestyle hacks, our collection of blogs has something for everyone. Start exploring and discover topics that captivate your interest!"}></SectionTitle>

        </div>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{
    blogs.map((item, idx) => 
    <div 
    key={idx}
    className="bg-white p-6 transition hover:scale-105 shadow-xl rounded-md">
        <div>
            <img className="w-[480px] h-80 rounded" src={item.image} alt="" />
        </div>
        <h2 className="text-3xl font-bold my-8 text-center">{item.title}</h2>
        <h3 className="text-lg font-medium my-3 flex items-center gap-3"> Category : {item.category}</h3>
        <p className="text-lg font-normal text-gray-500 my-3">{item.long_description}</p>

        <div className="flex justify-between items-center">

        <Link to={`/blogs/${item._id}`}><button className="btn text-xl font-bold bg-blue-600 text-white my-3">Details</button></Link>

        <button 
        onClick={() => handleAddToWishlist(item)}
        className="btn text-xl font-bold bg-blue-600 text-white my-3">ADD WISHLIST</button>

        </div>
    </div>)
}


</div>
            
</div>
</div>
);
};

export default AllBlog;