import { useState } from "react";
import { toast } from "react-toastify";


const Newsletter = () => {

    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        toast.success("Thank you for subscribing to our Newsletter!");
        setEmail("");
    };

    return (

    <div className="w-10/12 mx-auto py-24">

    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-12 items-center">

        <section className="flex justify-between items-center gap-6 py-16 px-12 md:px-16  rounded-lg col-span-3 bg-white">

            <div>
                <h4 className="text-sm font-light text-gray-500 mb-2">Every Saturday</h4>
                <h2 className="text-xl font-semibold">Weekly Highlights</h2>
                <p className="text-base font-light text-black mt-3">Stay updated with a curated roundup of the <br /> week's most talked-about content</p>
                <h4 className="mt-3 btn text-base font-light border-0 border-b-4 btn-outline">Subscribe</h4>
            </div>

            <div>
                <h4 className="text-sm font-light text-gray-500 mb-2">Last week of the month</h4>
                <h2 className="text-xl font-semibold">Monthly Digest</h2>
                <p className="text-base font-light text-black mt-3">Take a step back and savor a well-rounded <br /> recap of the month's highlights</p>
                <h4 className="mt-3 btn text-base font-light border-0 border-b-4 btn-outline">Subscribe</h4>
            </div>

        </section>

    <section className="col-span-2">
        <h1 className="text-5xl font-semibold mb-8 leading-[65px]">Subscribe to our Newsletter</h1>

            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="border p-4 mr-12 rounded-md text-base font-normal w-full" />
            <p className="mt-6"><button 
            className="btn bg-blue-500 text-white text-lg font-light uppercase w-full py-3"
            onClick={handleSubscribe}>Subscribe</button></p>

    </section>
            
</div>
</div>
);
};

export default Newsletter;