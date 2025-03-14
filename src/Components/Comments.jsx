import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";


import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionTitle from "./SectionTitle";



const Comments = () => {

    const axiosPublic = useAxiosPublic();

    const { data: comments = [] } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await axiosPublic.get('/comments');
            return res.data;
        }
    })

    return (

        <div className="">
        <div className="w-9/12 mx-auto mb-24">

        <SectionTitle
        heading={"⭐ What Our Readers Say"}
        subHeading={"Discover what our readers think about our content! Read honest reviews and testimonials from our community. See how our blogs have inspired and informed people just like you. 📢✨"}>
        </SectionTitle>

    <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper bg-blue-50 rounded-lg shadow-lg">

        {
            comments.map(review => <SwiperSlide
            key={review._id}>
                <div className="my-24 w-10/12 mx-auto flex flex-col items-center">
                    <h3><FaQuoteLeft className="text-5xl font-bold my-12"></FaQuoteLeft></h3>
                    <p className="text-center text-[#444444] text-xl">{review.text}</p>
                    <h3 className="text-center text-[#CD9003] text-3xl mt-4">{review.userName}</h3>
                </div>
            </SwiperSlide>)
        }

    </Swiper>
            
</div>
</div>
);
};

export default Comments;