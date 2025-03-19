
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";

const SignIn = () => {

    const { signInUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";




    const handleSignIn = (e) => {

        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        signInUser(email, password)
        .then(result => {
            form.reset();
            Swal.fire({
                icon: "success",
                title: "Congratulation",
                text: "You Successfully Login",
            });
            navigate(from, { replace: true });
        })
        .catch(error => {
            console.log(error.message);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Wrong E-mail or Password!",
            });
        })
    }

    return (

        <div className="bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] py-24">

            <Helmet>
                <title>BOHO PEOPLE | SIGN IN</title>
            </Helmet>

        <div className="">

        <div className="md:w-1/2 lg:w-1/3 mx-12 md:mx-auto py-24">
            <h3 className="text-blue-500 text-2xl font-semibold text-center mb-8 underline">Welcome Back!</h3>
            <h1 className="text-3xl font-bold my-4 text-center uppercase">Member Login</h1>
            <p className="text-base text-gray-500 font-normal text-center">Access to all features. No credit card required.</p>

        {/* google login */}
        <SocialLogin></SocialLogin>


            <div className="flex w-full flex-col border-opacity-50 my-12">
                <div className="divider">OR Continue With</div>
            </div>

            <form 
            onSubmit={handleSignIn}
            className="space-y-5 bg-blue-100 w-full px-12 py-10 rounded-sm shadow-lg">

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">E-mail *</span>
                </div>
                    <input type="email" name="email" placeholder="Enter Your email" className="input border-none w-full rounded-sm" />
            </label>

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Password *</span>
                </div>
                    <input type="password" name="password" placeholder="Enter Your password" className="input border-none w-full rounded-sm" />
            </label>


            <input className="bg-blue-500 text-white btn w-full py-2 rounded cursor-pointer text-lg" type="submit" value="Login" />

            </form>

            <p className="text-lg font-normal text-center my-5">Don't have an account? <Link className="underline text-xl font-bold hover:text-warning transition hover:scale-110" to="/register">Sign Up</Link></p>
            
        </div>

        </div>

        </div>

);
};

export default SignIn;