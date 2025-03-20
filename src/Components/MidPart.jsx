import { MdDateRange } from "react-icons/md";
import SectionTitle from "./SectionTitle";


const MidPart = () => {
    return (
        <div className=''>
        <div className="my-24">

            <SectionTitle 
            heading={'🌿 Recent Boho Inspirations'}
            subHeading={'Stay updated with the latest trends, stories, and insights from the world of bohemian living. Explore our handpicked blog posts featuring lifestyle tips, fashion ideas, travel adventures, and spiritual wisdom—all curated to help you embrace the free-spirited essence of Boho People. 💫'}>
            </SectionTitle>
    
            <div 
            style={{backgroundImage: `url('https://i.ibb.co.com/sJm9nvph/couple-browsing-digital-device-concept.jpg')`}}
            className='mt-24 relative bg-cover bg-fixed bg-center py-36'>
    
            <div className='transition hover:scale-110 inset-0 bg-white bg-opacity-10 backdrop-blur-md w-8/12 mx-auto py-12 px-12'>
    
            <div className='text-black text-center'>
                <h3 className="text-4xl font-semibold mt-4">✨ Blog of the Month</h3>
                <h4 className="flex justify-center items-center gap-6 mt-12 text-xl"><MdDateRange></MdDateRange><span>2025-03-13T22:15:38Z</span></h4>
                <p className="text-xl font-semibold my-12">Each month, we feature an exceptional blog post that captures the true essence of bohemian living. Whether it’s an inspiring travel story, a deep dive into boho fashion, or mindful living tips, this spotlighted blog is a must-read for every free spirit! 🌿💛</p>
                <div className="flex justify-center items-center gap-6">
                <img
                    alt=""
                    src="https://i.ibb.co.com/21nvy17z/Shagar619-removebg-preview-1.png"
                    className="inline-block size-10 rounded-full ring-2 ring-white"/>
                    <h3 className="text-2xl font-bold"><span className="text-xl">by</span> Shagar Ahmed</h3>
                </div>
    
            </div>
            </div>
    
            </div>
            
            </div>
            </div>
    );
};

export default MidPart;