import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseSelectedClass = () => {
    const{user,loading} = UseAuth();
    const [axiosSecure] = UseAxiosSecure();

    const { refetch, data: selectedClass = []} = useQuery({
        queryKey: ['selectClasses',user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure(`/selectClasses?email=${user?.email}`)
            return response.json();
          } 
});

return [selectedClass,refetch]
}

export default UseSelectedClass;