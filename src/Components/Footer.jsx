import { FaApple, FaFacebook, FaGooglePlay, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from './../assets/logo/BOHO.png'
import { Link } from 'react-router-dom';

// bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]

const Footer = () => {
    return (

        <div className="bg-blue-100 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]">

        <div className='px-12'>

        <div>
            <hr className="pt-4 mb-16" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-8 gap-6 items-start">

                <div className='col-span-2'>
                <div className='flex items-center'>
                <img className='h-16 w-16 rounded' src={logo} alt="" />
                <h3 className="text-3xl font-bold text-blue-600 ml-4">BOHO PEOPLE</h3>
                </div>
                    <p className='my-6 text-base font-normal text-gray-800'>BOHO PEOPLE is the heart of the design community and the best resource to discover and connect with <br /> designers and blogs worldwide.</p>
                    <div className='flex items-center gap-4'>
                        <Link><FaFacebook className='h-8 w-8 text-white bg-blue-600 rounded-full'></FaFacebook></Link>
                        <Link><FaTwitter className='h-8 w-8 text-blue-600 bg-white rounded-full'></FaTwitter></Link>
                        <Link><FaInstagram className='h-8 w-8 text-blue-600 bg-white rounded-full'></FaInstagram></Link>
                    </div>
                </div>

                <div className='flex flex-col text-center md:text-start space-y-3 text-base font-normal text-gray-800'>
                    <h3 className='text-xl font-semibold text-black mb-3'>Resources</h3>
                    <Link>About Us</Link>
                    <Link>Our Team</Link>
                    <Link>Products</Link>
                    <Link>Contact</Link>
                </div>

                <div className='flex flex-col space-y-3 text-center md:text-start text-base font-normal text-gray-800'>
                    <h3 className='text-xl font-semibold text-black mb-3'>Community</h3>
                    <Link>Features</Link>
                    <Link>Pricing</Link>
                    <Link>Credit</Link>
                    <Link>FAQ</Link>
                </div>

                <div className='flex flex-col space-y-3 text-center md:text-start text-base font-normal text-gray-800'>
                    <h3 className='text-xl font-semibold text-black mb-3'>Quick Links</h3>
                    <Link>iOS</Link>
                    <Link>Android</Link>
                    <Link>Microsoft</Link>
                    <Link>Desktop</Link>
                </div>

                <div className='flex flex-col space-y-3 text-center md:text-start text-base font-normal text-gray-800'>
                    <h3 className='text-xl font-semibold text-black mb-3'>More</h3>
                    <Link>Privacy</Link>
                    <Link>Help</Link>
                    <Link>Terms</Link>
                    <Link>FAQ</Link>
                </div>


                <div className='col-span-2'>
                    <h3 className='text-xl font-semibold text-black mb-5'>Download App</h3>
                    <p className='text-sm font-normal text-gray-800 mb-4'>Download our Apps and get extra 15% <br /> Discount on your first Order…!</p>

                <div className='flex flex-col md:flex-row md:items-center gap-3'>

                <Link className='bg-blue-600 text-white px-3 py-2 rounded-lg'>
                        <div className='flex items-center gap-3'>
                            <p><FaApple className='h-10 w-8'></FaApple></p>
                            <div>
                                <p className='text-xs font-normal'>Download on the</p>
                                <h3 className='text-xl font-medium'>App Store</h3>
                            </div>
                        </div>
                    </Link>

                    <Link className='bg-blue-600 text-white px-3 py-2 rounded-lg'>
                        <div className='flex items-center gap-3'>
                            <p><FaGooglePlay className='h-10 w-8'></FaGooglePlay></p>
                            <div>
                                <p className='text-xs font-normal'>GET IT ON</p>
                                <h3 className='text-xl font-medium'>Google Play</h3>
                            </div>
                        </div>
                    </Link>

                </div>


                </div>

            </div>
            <hr className="mt-10 mb-4" />
            <div className='flex justify-between items-center my-6 text-sm font-medium text-gray-900 pb-10'>
                <h3>Copyright © 2024. BOHO PEOPLE All right reserved</h3>
                <div className='flex gap-5'>
                    <Link>Privacy Policy</Link>
                    <Link>Terms & Conditions</Link>
                    <Link>Security</Link>
                </div>
            </div>
        </div>
    </div>
</div>
);
};

export default Footer;