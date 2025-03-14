import { Helmet } from "react-helmet-async";
import BlogCategories from "../Components/BlogCategories";
import Comments from "../Components/Comments";
import Hero from "../Components/Hero";
import Newsletter from "../Components/Newsletter";
import RecentBlog from "../Components/RecentBlog";

const Home = () => {
    return (
        <div>

            <Helmet>
                <title>BOHO PEOPLE | HOME</title>
            </Helmet>

            <Hero></Hero>
            <BlogCategories></BlogCategories>
            <RecentBlog></RecentBlog>
            <Comments></Comments>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;