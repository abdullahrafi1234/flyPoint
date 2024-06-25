import axios from "axios";

export const axiosPublic = axios.create({
    // baseURL: 'http://localhost:5000'
    baseURL: 'https://fly-point-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;