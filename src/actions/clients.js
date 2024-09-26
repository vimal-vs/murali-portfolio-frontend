import axios from "axios";

export const getAllClients = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events/0`);
        return response.data
    } catch (error) {
        console.error('Error fetching clients:', error);
    }
};