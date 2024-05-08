import instance from "../config/axios.js";

export const JobsService = {
    fetchJobsByCategory: (categoryId) => {
        return instance.get(`/api/category/${categoryId}/jobs`);
    },
};
