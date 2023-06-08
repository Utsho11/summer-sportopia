import { useQuery } from "@tanstack/react-query";

const UseClass = () => {
    const {data: classes = [],refetch, isLoading: loading} = useQuery({
        queryKey: ['class'],
        queryFn: async() => {
            const res = await fetch("http://localhost:5000/class");
            return res.json();

        }
    });
    

    return [classes,refetch,loading];
};

export default UseClass;