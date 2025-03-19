
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";


const Register = () => {

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { createUser } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();




    const onSubmit = data => {
        createUser(data.email, data.password)
        .then(result => {

            const userInfo = {
                name: data.name,
                email: data.email
            }

            // create user entry in the database
            axiosPublic.post('/users', userInfo)
            .then(res => {
                if(res.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'Congratulations!',
                        text: "User Created Successfully",
                        showConfirmButton: true,
                    });
                    navigate('/');
                }
            })
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (

<div className="bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] py-24">

    <Helmet>
        <title>BOHO PEOPLE | REGISTER</title>
    </Helmet>

<div className="">

<div className="w-1/3 mx-auto py-24">
            <h3 className="text-blue-500 text-2xl font-semibold text-center mb-8 underline uppercase">Register</h3>
            <h1 className="text-3xl font-bold my-4 text-center uppercase">Start for free Today</h1>
            <p className="text-base text-gray-500 font-normal text-center">Access to all features. No credit card required.</p>

            {/* google login */}
            <SocialLogin></SocialLogin>


            <div className="flex w-full flex-col border-opacity-50 my-12">
                <div className="divider">OR Continue With</div>
            </div>
            
<form 
className="bg-blue-100 w-full px-12 py-10 rounded-sm shadow-lg"
onSubmit={handleSubmit(onSubmit)}>

<label className="">
    <div className="label">
       <span className="label-text text-lg font-normal">Name *</span>
    </div>
    <input 
    {...register("name", { required: true })}
    type="text" name="name" placeholder="Enter Your Name" className="input border-none w-full rounded-sm" />
    {errors.name && <span className="text-red-600">Name is required</span>}
</label>   

<label 
className="form-control w-full">
    <div className="label">
       <span className="label-text text-lg font-normal">E-mail *</span>
    </div>
    <input 
    {...register("email", { required: true })}
    type="email" name="email" placeholder="Enter Your E-mail" className="input border-none w-full rounded-sm" />
    {errors.email && <span className="text-red-600">Email is required</span>}
</label>

<label 
className="form-control w-full">
    <div className="label">
       <span className="label-text text-lg font-normal">Password *</span>
    </div>
    <input 
        {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 20,
            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
        })}
    type="password" name="password" placeholder="Enter Your Password" className="input border-none w-full rounded-sm" />

    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

</label>


<input 
className="bg-blue-500 btn text-xl font-bold text-white w-full py-2 mt-6 rounded cursor-pointer" type="submit" value="Sign Up" />

</form>


<p className="text-lg font-normal text-center my-5">Already have an account? <Link className="underline text-xl hover:text-warning transition hover:scale-110 font-bold " to="/signin">Sign In</Link></p>

</div>

</div>
</div>
);
};

export default Register;