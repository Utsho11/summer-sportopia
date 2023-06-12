import { useQuery } from '@tanstack/react-query';
import React from 'react';

const UseAgreedClasses = () => {
    const {data: agreedClasses = [],refetch, isLoading: loading} = useQuery({
        queryKey: ['agreedClass'],
        queryFn: async() => {
            const res = await fetch("https://summer-camp-school-server-utsho11.vercel.app/agreedClasses");
            return res.json();

        }
    });
    

    return [agreedClasses,refetch,loading];
};

export default UseAgreedClasses;