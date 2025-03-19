

const Hero = () => {
    return (


<div className="mb-12">

<div
    className="bg-cover min-h-screen"
    style={{
    backgroundImage: "url(https://i.ibb.co.com/WvJKBsxd/online-blog.jpg)",
    }}>
    {/* <div className="hero-overlay bg-opacity-5"></div> */}
<div className="backdrop-blur-[6px] min-h-screen text-center pt-40 md:pt-80">
<div className="w-1/2 mx-auto">
        <h1 className="mb-5 text-6xl text-orange-500 font-bold uppercase leading-[80px]">Embrace the <br /> Bohemian Spirit</h1>
        <p className="my-8 text-xl font-medium text-white">
        BOHO PEOPLE is a vibrant and soulful blogging website dedicated to free-spirited living, creativity and a community of like-minded individuals who believe in living life with passion and purpose. <br /> 🌿✨ #StayWild #LiveBoho
        </p>
        <button className="btn text-xl font-bold bg-blue-600 text-white border-none">Get Started</button>
</div>
</div>
</div>
</div>
);
};

export default Hero;
