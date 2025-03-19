import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../Components/SectionTitle";
import useWishlist from "../hooks/useWishlist";
import { CgDetailsMore } from "react-icons/cg";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const WishList = () => {

    const [ wishlist, refetch ] = useWishlist();
    const axiosSecure = useAxiosSecure();

    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

            axiosSecure.delete(`/wishlist/${id}`)
            .then(res => {
            if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
                title: "Deleted!",
                text: "Your Blog has been deleted.",
                icon: "success"
            });
            }
            })
            }
        });
    }

    return (

<div className="bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] py-24">

    <Helmet>
        <title>BOHO PEOPLE | WISHLIST</title>
    </Helmet>

    <div className="">
            
            <SectionTitle 
            subHeading={"Keep track of your favorite blogs all in one place! Explore the posts you've saved, revisit inspiring content, and manage your wishlist with ease. Access details or remove blogs you no longer wish to keep—all just a click away!"}
            heading={"Your Wishlist"}>
            </SectionTitle>

        <div className="bg-white mx-4 md:w-8/12 md:mx-auto p-4 md:p-12 rounded-sm shadow-lg">

            <h2 className="text-[#151515] text-[32px] font-bold mb-8 uppercase">Total Wishlist : {wishlist.length}</h2>

            {/* table */}

        <div className="overflow-x-auto">

        <table className="table w-full">

    {/* head */}
        <thead className="bg-blue-500 text-base text-white font-semibold uppercase">
            <tr>
                <th>#</th>
                <th>image</th>
                <th>Category</th>
                <th>Details</th>
                <th>Delete</th>
                </tr>
        </thead>

        <tbody>

    {
        wishlist.map((item, idx) => 
        <tr key={idx} className="text-[#737373] text-base font-normal hover">
            <th>{idx + 1}</th>

    <td>
        <div className="flex items-center gap-3">
            <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
                <img
                    src={item.image}
                    alt="" />
            </div>
            </div>
        </div>
    </td>

    <td>
        {item.category}
    </td>

    <td>

        <Link to={`/blogs/${item.listId}`}>
            <button 
                className="btn bg-green-400">
                <CgDetailsMore></CgDetailsMore>
            </button>
        </Link> 

    </td>
            <td>
                <button 
                onClick={() => handleDeleteUser(item._id)}
                className="btn bg-[#B91C1C]"><RiDeleteBin6Line className="text-xl text-white"></RiDeleteBin6Line></button>
            </td>
</tr>
    )
    }

</tbody>
</table>
</div>

</div>

</div>
</div>
);
};

export default WishList;