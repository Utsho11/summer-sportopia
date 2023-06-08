import { useQuery } from "@tanstack/react-query";

const UsePopularClass = () => {
    const {data: popularClasses = [],refetch, isLoading: loading} = useQuery({
        queryKey: ['popularClasses'],
        queryFn: async() => {
            const res = await fetch("http://localhost:5000/popularClasses");
            return res.json();

        }
    });
    

    return [popularClasses,refetch,loading];
};

export default UsePopularClass;