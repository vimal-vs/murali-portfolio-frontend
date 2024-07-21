"use client";
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const CommonContext = createContext();

export const useCommonContext = () => {
    return useContext(CommonContext);
};

export const CommonProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/common/1`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <CommonContext.Provider value={{ data, loading }}>
            {children}
        </CommonContext.Provider>
    );
};
