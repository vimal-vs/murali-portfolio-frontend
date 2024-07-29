import axios from "axios";

export const getAllBlogs = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/all?limit=3`);
        return response.data
    } catch (error) {
        console.error('Error fetching blogs:', error);
    }
};
