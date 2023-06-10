import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";

const UseSelectedClass = () => {
    const{user} = UseAuth();
    const { refetch, data: selectedClass = []} = useQuery({
        queryKey: ['selectClasses',user?.email],    
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/selectClasses?email=${user?.email}`,)
            return response.json();
          } 
});

return [selectedClass,refetch]
}

export default UseSelectedClass;