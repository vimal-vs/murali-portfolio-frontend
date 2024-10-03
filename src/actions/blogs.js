import axios from "axios";

export const getAllBlogs = async ({ limit = true } = {}) => {
    try {
        const params = new URLSearchParams();

        if (limit) params.append('limit', '3');

        const query = params.toString() ? `?${params.toString()}` : '';
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/all${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blogs:', error);
    }
};

export const getBlog = async ({ id }) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blog:', error);
    }
};