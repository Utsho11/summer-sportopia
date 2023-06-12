import { useQuery } from "@tanstack/react-query";

const UseInstructor = () => {
    const {data: instructors = [],refetch, isLoading: loading} = useQuery({
        queryKey: ['instructor'],
        queryFn: async() => {
            const res = await fetch("https://summer-camp-school-server-utsho11.vercel.app/instructor");
            return res.json();

        }
    });

    return [instructors,refetch,loading];
};

export default UseInstructor;