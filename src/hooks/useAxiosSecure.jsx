import axios from "axios";


const axiosSecure = axios.create({
    baseURL: "https://bohopeople-server-side.vercel.app"
});

const useAxiosSecure = () => {


    return axiosSecure;
};

export default useAxiosSecure;
