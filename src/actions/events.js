import axios from "axios";

export const getAllEvents = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events/all`);
        return response.data
    } catch (error) {
        console.error('Error fetching blogs:', error);
    }
};
