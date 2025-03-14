import { useState } from "react";
import { toast } from "react-toastify";


const Newsletter = () => {

    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        toast.success("Thank you for subscribing to our Newsletter!");
        setEmail("");
    };

    return (
    <div className="mb-24">

    <section className="py-24 text-center bg-gray-200">
        <h2 className="text-4xl font-bold mb-12">Subscribe to Our Newsletter</h2>
        <div className="mt-4 flex justify-center">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="border p-2 mr-8 rounded-md text-xl font-medium" />
            <button 
            className="btn bg-blue-600 text-white text-lg font-semibold uppercase"
            onClick={handleSubscribe}>Subscribe</button>
        </div>
    </section>
            
        </div>
    );
};

export default Newsletter;