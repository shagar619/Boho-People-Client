import { Helmet } from "react-helmet-async";
import BlogCategories from "../Components/BlogCategories";
import Comments from "../Components/Comments";
import Hero from "../Components/Hero";
import Newsletter from "../Components/Newsletter";
import RecentBlog from "../Components/RecentBlog";
import MidPart from "../Components/MidPart";

const Home = () => {
    return (
        <div className="bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]">

            <Helmet>
                <title>BOHO PEOPLE | HOME</title>
            </Helmet>

            <Hero></Hero>
            <BlogCategories></BlogCategories>
            <RecentBlog></RecentBlog>
            <MidPart></MidPart>
            <Comments></Comments>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;