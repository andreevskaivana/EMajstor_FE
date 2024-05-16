import instance from "../config/axios.js";

export const JobsService = {
    fetchJobsByCategory: (categoryId) => {
        return instance.get(`/api/category/${categoryId}/jobs`);
    },
    addJob: (title,description,price,jobProvider,category) => {
        return instance.post("/api/job/add-job", {
            "title": title,
            "description": description,
            "price": price,
            "category": category,
            "jobProvider": jobProvider,
        })
    },
};
