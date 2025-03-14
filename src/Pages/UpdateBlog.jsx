import { useLoaderData } from "react-router-dom";
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

    const { _id, category, short_description, long_description, email} = useLoaderData();
    
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

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
            }
        }
    };


    return (

        <div className="bg-white mx-12 md:mx-24">

            <Helmet>
                <title>BOHO PEOPLE | UPDATE BLOG</title>
            </Helmet>

        <div className="pb-56 pt-36 mb-12 bg-blue-100">
            <h1 className="uppercase text-center text-4xl font-bold text-blue-800 underline mt-8">Update Blog</h1>
            
            <SectionTitle
            heading={'Update Your Blog Post'}
            subHeading={'Need to refine or refresh your blog? Edit the details, update your content, and ensure your post stays relevant and impactful. Make the changes that matter and keep your audience engaged!'}
            ></SectionTitle>

        <div className="w-1/2 mx-auto">

        <form 
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}>



            {/* category */}
            <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Category *</span>
                    </div>
                    <select 
                    {...register('category', { required: true })}
                    defaultValue={category} name="category" required className="select text-base font-normal text-gray-500 select-bordered w-full">
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
                    required className="textarea textarea-bordered text-base font-normal text-gray-500" name="short_description" placeholder="Enter short description"></textarea>
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
                    required className="textarea textarea-bordered text-base font-normal text-gray-500" name="long_description" placeholder="Enter long Description"></textarea>
                    {errors.name && <span className="text-red-600">Long Description is required</span>}
                </label>


            {/* image */}
            <div className="form-control w-full my-6">
                <input 
                {...register('image', { required: true })}
                type="file" className="file-input w-full max-w-xs" />
                {errors.name && <span className="text-red-600">Image is required</span>}
            </div>

            <p className="text-center"><button className="btn text-xl uppercase bg-blue-600 text-white">
                UPDATE BLOG <FaUtensils className="ml-4"></FaUtensils>
            </button></p>


        </form>

    </div>
    </div>

</div>
);
};

export default UpdateBlog;