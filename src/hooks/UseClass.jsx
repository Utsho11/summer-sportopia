import { useQuery } from "@tanstack/react-query";

const UseClass = () => {
    const {data: classes = [],refetch, isLoading: loading} = useQuery({
        queryKey: ['class'],
        queryFn: async() => {
            const res = await fetch("https://summer-camp-school-server-utsho11.vercel.app/classes");
            return res.json();

        }
    });
    

    return [classes,refetch,loading];
};

export default UseClass;