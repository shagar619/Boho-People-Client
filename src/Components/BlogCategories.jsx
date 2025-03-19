import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './../CSS/Categories.css';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import SectionTitle from "./SectionTitle";


const BlogCategories = () => {
    return (

<div>

    <div>

        <SectionTitle 
        heading={"🔍 Explore All Categories"}
        subHeading={"Discover a world of inspiration! From bohemian fashion and mindful living to travel, art, and sustainability, browse through our diverse categories to find content that speaks to your free spirit. Whether you're looking for style tips, wellness guides, or creative DIYs, BOHO PEOPLE has something for every soul. 🌿✨"}>
        </SectionTitle>

    </div>

<div className="w-10/12 mx-auto">

<>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper">


        <SwiperSlide>
            <img className="" src="https://i.ibb.co.com/LC2nxc6/andrew-neel-QLq-Nal-Pe0-RA-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="" src="https://i.ibb.co.com/59MnLNq/andrew-neel-ute2-XAFQU2-I-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="" src="https://i.ibb.co.com/h28NGLS/beautiful-blogger-recording-make-up-video.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co.com/8zYkp6S/beauty-vlogger-making-video-her-online-followers.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co.com/Pr3FdLp/blogger.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co.com/WBhnCWy/close-up-pretty-young-girl-ready-blog.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co.com/GTJWdNv/elearning-cute-young-beautiful-girl-remotely-home-giving-violin-classes-explaining-notes.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co.com/3CZtsKh/front-view-smiley-woman-with-microphone-radio-studio.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co.com/sy5cyBd/portrait-young-pretty-woman-sitting-table-student-learning-education-smiling-writing-notes-diary-boo.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co.com/N22Qmd5/smiley-woman-broadcasting-radio-with-tablet.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co.com/TKpHPph/young-pretty-woman-photographer-working-from-home-laptop.jpg" />
        </SwiperSlide>

        </Swiper>
    </>
</div>
            
</div>
);
};

export default BlogCategories;
