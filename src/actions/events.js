import axios from "axios";

export const getAllEvents = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events/all`);
        return response.data
    } catch (error) {
        console.error('Error fetching events:', error);
    }
};

export const getCommon = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events/1`);
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
