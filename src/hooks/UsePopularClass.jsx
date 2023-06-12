import { useQuery } from "@tanstack/react-query";

const UsePopularClass = () => {
    const {data: popularClasses = [],refetch, isLoading: loading} = useQuery({
        queryKey: ['popularClasses'],
        queryFn: async() => {
            const res = await fetch("https://summer-camp-school-server-utsho11.vercel.app/popularClasses");
            return res.json();

        }
    });
    

    return [popularClasses,refetch,loading];
};

export default UsePopularClass;