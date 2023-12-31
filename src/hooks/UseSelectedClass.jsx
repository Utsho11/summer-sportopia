import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseSelectedClass = () => {
    const{user,loading} = UseAuth();
    const [axiosSecure] = UseAxiosSecure();

    const { refetch, data: selectedClasses = []} = useQuery({
        queryKey: ['selectedClasses',user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selectClasses?email=${user?.email}`)
            return res.data;
          } 
});

return [selectedClasses,refetch]
};

export default UseSelectedClass;