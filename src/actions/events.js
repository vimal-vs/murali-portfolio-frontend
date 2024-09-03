import axios from "axios";

export const getAllEvents = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events/all?limit=3`);
        return response.data
    } catch (error) {
        console.error('Error fetching blogs:', error);
    }
};

export const getCommon = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events/0`);
        return response.data
    } catch (error) {
        console.error('Error fetching blogs:', error);
    }
};
