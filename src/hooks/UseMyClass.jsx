import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";


const UseMyClass = () => {
    const{user,loading} = UseAuth();
    const [axiosSecure] = UseAxiosSecure();

    const { refetch, data: myClass = []} = useQuery({
        queryKey: ['myClasses',user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/myClasses?email=${user?.email}`)
            console.log(res);
            return res.data;
          } 
});

return [myClass,refetch]
};

export default UseMyClass;