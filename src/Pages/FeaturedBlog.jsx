import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SectionTitle from "../Components/SectionTitle";
import { Helmet } from "react-helmet-async";


const FeaturedBlog = () => {

    const axiosPublic = useAxiosPublic();

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      // Fetch all blogs from the backend
        axiosPublic.get("/blogs").then((response) => {
        const sortedBlogs = response.data
            .map((blog) => ({
            ...blog,
            wordCount: blog.long_description.split(" ").length // Calculate word count
            }))
          .sort((a, b) => b.wordCount - a.wordCount) // Sort by word count
          .slice(0, 10); // Take top 10 blogs

        setBlogs(sortedBlogs);
        });
    }, []);

    return (
        <div className=" bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] py-24">
            <Helmet>
                <title>BOHO PEOPLE | FEATURED BLOGS</title>
            </Helmet>
        
        <div className="">

            <SectionTitle
            heading={'Top 10 Featured Blogs'}
            subHeading={'Explore the most engaging and comprehensive blogs, handpicked based on their depth and word count. These top 10 posts offer valuable insights, detailed discussions, and expert opinions to keep you informed and inspired. Dive into the best content curated just for you!'}>
            </SectionTitle>
            

    <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Featured Blogs</h1>
        <table className="w-full border-collapse border border-gray-300">
        <thead>
        <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2 text-left">#</th>
            <th className="border border-gray-300 p-2 text-left">Category</th>
            <th className="border border-gray-300 p-2 text-left">Word Count</th>
        </tr>
        </thead>
        <tbody>
        {blogs.map((blog, index) => (
            <tr key={blog._id} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{blog?.category}</td>
                <td className="border border-gray-300 p-2">{blog.wordCount}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
    </div>
    </div>
    );
};

export default FeaturedBlog;