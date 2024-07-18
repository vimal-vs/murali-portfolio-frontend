import axios from "axios";

export const getAllTestimonials = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`);
        return response.data
    } catch (error) {
        console.error('Error fetching blogs:', error);
    }
};