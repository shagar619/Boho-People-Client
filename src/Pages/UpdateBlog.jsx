import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SectionTitle from "../Components/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateBlog = () => {

    const axiosPublic = useAxiosPublic();

    const { _id, category, author_name, date_time, short_description, long_description, email} = useLoaderData();
    
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        

        // image upload to img bb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                author_name: data.author_name,
                date_time: data.date_time,
                category: data.category,
                image: res.data.data.display_url,
                short_description: data.short_description,
                long_description: data.long_description
            }
            // 
            const menuRes = await axiosSecure.patch(`/blogs/${_id}`, menuItem);
            if(menuRes.data.modifiedCount > 0){
                // show success popup
                // reset();
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: `This Blog is Updated Now!`,
                    showConfirmButton: true,
                });
                navigate('/allBlog')
            }
        }
    };


    return (

        <div className="bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] py-24">

            <Helmet>
                <title>BOHO PEOPLE | UPDATE BLOG</title>
            </Helmet>

        <div className="">
            
            <SectionTitle
            heading={'✨🌍 Update Your Blog Post'}
            subHeading={'Need to refine or refresh your blog? Edit the details, update your content, and ensure your post stays relevant and impactful. Make the changes that matter and keep your audience engaged!'}>
            </SectionTitle>

        <div className="w-1/2 mx-auto">

        <form 
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}>

        {/* Author name */}
        <label 
            className="form-control w-full">
        <div className="label">
       <span className="label-text text-lg font-normal">Author Name *</span>
        </div>
        <input 
        {...register("author_name", { required: true })}
        defaultValue={author_name}
        type="text" name="author_name" className="input input-bordered w-full rounded-sm" />
        {errors.author_name && <span className="text-red-600">Author name is required</span>}
        </label>

        {/* Date & Time */}
        <label 
            className="form-control w-full">
        <div className="label">
       <span className="label-text text-lg font-normal">Date & Time *</span>
        </div>
        <input 
        {...register("date_time", { required: true })}
        defaultValue={date_time}
        type="datetime-local" name="date_time" className="input input-bordered w-full rounded-sm" />
        {errors.date_time && <span className="text-red-600">Date & Time is required</span>}
        </label>



            {/* category */}
            <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Category *</span>
                    </div>
                    <select 
                    {...register('category', { required: true })}
                    defaultValue={category} name="category" required className="select text-base font-normal text-gray-500 select-bordered w-full rounded-sm">
                        <option disabled>Select a category</option>
                        <option>Fashion</option>
                        <option>Travel</option>
                        <option>Lifestyle</option>
                        <option>Education</option>
                        <option>Food</option>
                        <option>Health</option>
                        <option>Finance</option>
                        <option>Fitness</option>
                        <option>Science</option>
                        <option>Business</option>
                    </select>
                    {errors.name && <span className="text-red-600">Please select a category</span>}
            </label>


            {/* short description */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Short Description *</span>
                    </div>
                    <textarea 
                    defaultValue={short_description}
                    {...register('short_description', { required: true })}
                    required className="textarea textarea-bordered text-base font-normal text-gray-500 rounded-sm" name="short_description"></textarea>
                    {errors.name && <span className="text-red-600">Short Description is required</span>}
                </label>

            {/* long description */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Long Description *</span>
                    </div>
                    <textarea 
                    defaultValue={long_description}
                    {...register('long_description', { required: true })}
                    required className="textarea textarea-bordered text-base font-normal text-gray-500" name="long_description"></textarea>
                    {errors.name && <span className="text-red-600">Long Description is required</span>}
                </label>


            {/* image */}
            <div className="form-control w-full my-6">
                <input 
                {...register('image', { required: true })}
                type="file" className="file-input w-full max-w-xs" />
                {errors.name && <span className="text-red-600">Image is required</span>}
            </div>

            <p className="text-center"><button className="btn text-base font-medium uppercase bg-blue-500 text-white rounded-sm">
                UPDATE BLOG <FaUtensils className="ml-4"></FaUtensils>
            </button></p>


        </form>

    </div>
    </div>

</div>
);
};

export default UpdateBlog;