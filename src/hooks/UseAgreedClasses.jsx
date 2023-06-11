import { useQuery } from '@tanstack/react-query';
import React from 'react';

const UseAgreedClasses = () => {
    const {data: agreedClasses = [],refetch, isLoading: loading} = useQuery({
        queryKey: ['agreedClass'],
        queryFn: async() => {
            const res = await fetch("http://localhost:5000/agreedClasses");
            return res.json();

        }
    });
    

    return [agreedClasses,refetch,loading];
};

export default UseAgreedClasses;