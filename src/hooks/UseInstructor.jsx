import { useQuery } from "@tanstack/react-query";

const UseInstructor = () => {
    const {data: instructors = [],refetch, isLoading: loading} = useQuery({
        queryKey: ['instructor'],
        queryFn: async() => {
            const res = await fetch("http://localhost:5000/instructor");
            return res.json();

        }
    });

    return [instructors,refetch,loading];
};

export default UseInstructor;