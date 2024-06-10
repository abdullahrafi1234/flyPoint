import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosPublic";

const useParcel = () => {
   //tan stack query
   const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    //tan stack query 
    const { refetch,data: parcel = [] } = useQuery({
        queryKey: ['parcel', user?.email],
        queryFn: async () => {
            // const res = await axiosSecure.get(`booking?email=${user.email}`)
            const res = await axiosSecure.get(`booking`)
            return res.data
        }
    })
    return [parcel, refetch]
};

export default useParcel;