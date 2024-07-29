import axios from "axios";

export const getAllPodcasts = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/podcasts/all?limit=6`);
        return response.data
    } catch (error) {
        console.error('Error fetching blogs:', error);
    }
};