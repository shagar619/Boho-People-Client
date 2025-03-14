
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

        <div className="bg-white mx-12 md:mx-24">

            <Helmet>
                <title>BOHO PEOPLE | SIGN IN</title>
            </Helmet>

        <div className="pb-12 pt-36 mb-12 bg-blue-100">

        <div className="w-1/2 mx-auto py-24">
            <h3 className="text-blue-600 text-5xl font-semibold text-center mb-8 underline">Welcome Back!</h3>
            <h1 className="text-4xl font-bold my-4 text-center uppercase">Member Login</h1>
            <p className="text-base text-gray-500 font-normal text-center">Access to all features. No credit card required.</p>

        {/* google login */}
        <SocialLogin></SocialLogin>


            <div className="flex w-full flex-col border-opacity-50 my-12">
                <div className="divider">OR Continue With</div>
            </div>

            <form 
            onSubmit={handleSignIn}
            className="space-y-5 bg-white w-full px-12 py-10 rounded-lg shadow-lg">

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">E-mail *</span>
                </div>
                    <input type="email" name="email" placeholder="Enter Your email" className="input input-bordered w-full" />
            </label>

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Password *</span>
                </div>
                    <input type="password" name="password" placeholder="Enter Your password" className="input input-bordered w-full" />
            </label>


            <input className="bg-blue-600 text-white btn w-full py-2 rounded cursor-pointer text-lg" type="submit" value="Login" />

            </form>

            <p className="text-lg font-normal text-center my-5">Don't have an account? <Link className="underline text-xl font-bold hover:text-warning transition hover:scale-110" to="/register">Sign Up</Link></p>
            
        </div>

        </div>

        </div>

);
};

export default SignIn;