import { Link, useLocation, useNavigate } from "react-router-dom";
import useBlog from "../hooks/useBlog";
import SectionTitle from "./SectionTitle";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const RecentBlog = () => {

    const [ blogs, , refetch ] = useBlog();

    const recentBlog = blogs.slice(0, 6);



    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();


    const handleAddToWishlist = (item) => {

        if(user?.email) {

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
        <div className="mb-24">

            <SectionTitle
            heading={"🔥 Latest Insights & Stories"}
            subHeading={"Stay updated with our freshest blogs, featuring expert insights, trending topics, and in-depth stories. Explore our latest six articles and dive into engaging content that keeps you informed and inspired. 🚀"}>
            </SectionTitle>

    <div className="w-10/12 mx-auto bg-slate-200 py-12 ">
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{
    recentBlog.map((item, idx) => 
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

        <Link to={`/blogs/${item._id}`}><button className="btn text-xl font-bold bg-blue-600 text-white my-3 uppercase">Details</button></Link>

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

export default RecentBlog;