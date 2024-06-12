import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useParcel = () => {
   //tan stack query
   const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    //tan stack query 
    const { refetch,data: parcel = [] } = useQuery({
        queryKey: ['parcel', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`booking?email=${user.email}`)
            // const res = await axiosSecure.get(`booking`)
            return res.data
        }
    })
    return [parcel, refetch]
};

export default useParcel;