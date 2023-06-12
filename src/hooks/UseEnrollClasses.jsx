import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseEnrollClasses = () => {
    const{user,loading} = UseAuth();
    const [axiosSecure] = UseAxiosSecure();

    const { refetch, data: enrollClasses = []} = useQuery({
        queryKey: ['enrollClasses',user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/enrollClasses?email=${user?.email}`)
            return res.data;
          } 
});

return [enrollClasses,refetch]
};

export default UseEnrollClasses;