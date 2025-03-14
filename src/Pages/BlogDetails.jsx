import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SectionTitle from "../Components/SectionTitle";
import { Helmet } from "react-helmet-async";


const BlogDetails = () => {

    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");
    const axiosPublic = useAxiosPublic();

    const { _id, title, category, image, short_description, long_description, email} = useLoaderData();
    
    const { user } = useAuth();

    console.log(user.email, email);

    const isBlogOwner = user?.email === email;

    const handleCommentSubmit = async () => {
    if (!commentText.trim()) return;

    const newComment = {
        blogId: _id,
        email: user.email,
        text: commentText,
    };

    // Save comment to the backend
    await axiosPublic.post(`/comments`, newComment);
    setComments((prev) => [...prev, newComment]);
    setCommentText("");
    Swal.fire({
        title: "Comment Added!",
        icon: "success",
        draggable: true
    });
    };


    return (

<div className="bg-white mx-12 md:mx-24">

<div className="pb-36 pt-24 mb-12 px-12 bg-blue-100">

    <Helmet>
        <title>BOHO PEOPLE | BLOG DETAILS</title>
    </Helmet>

    <SectionTitle 
    heading={'🌿 Blog Insights: Dive Deeper'}
    subHeading={"Welcome to the heart of BOHO PEOPLE! Here, you'll find in-depth stories, inspiring journeys, and thoughtful reflections on bohemian living. Explore captivating narratives, expert tips, and creative ideas that bring freedom, artistry, and mindfulness into everyday life. Let your spirit wander and your soul be inspired! ✨🌍"}>
    </SectionTitle>


<div>
    <img className="h-[800px] w-full rounded object-cover" src={image} alt="" />
</div>
<h3 className="text-5xl font-semibold text-center my-16">{title}</h3>


<h2 className="text-xl font-semibold my-3 flex items-center gap-3">Category : <span className="text-2xl font-bold">{category}</span> </h2>

<p className="text-xl font-medium text-gray-600 mb-4">{short_description}</p>

<p className="text-lg font-normal text-gray-500 mb-8">{long_description}</p>

{isBlogOwner ? 
<Link to={(`/update-blog/${_id}`)}>
    <button
        className="bg-blue-500 text-white btn px-4 py-2 text-xl rounded mb-6 uppercase">
        Update Blog
    </button>
</Link>
:
<></>
}

{isBlogOwner ? (
    <p className="text-red-500">You cannot comment on your own blog.</p>
) : (
<div>
    <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Write a comment..."
        className="w-full border border-gray-300 rounded p-2 mb-4"
    />
    <button
        onClick={handleCommentSubmit}
        className="bg-green-500 text-white px-4 py-2 text-xl btn rounded"
    >
        Post Comment
    </button>
</div>
)}
</div>
</div>
);
};

export default BlogDetails;