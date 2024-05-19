import instance from "../config/axios.js";

export const JobsService = {
    fetchJobsByCategory: (categoryId) => {
        return instance.get(`/api/category/${categoryId}/jobs`);
    },
    gradeJob:(jobId,grade) => {
        return instance.post(`/api/job/grade-job/${jobId}?grade=${grade}`);
    },
    addJob:(title,description,price,jobProviderId,categoryId) => {
        return instance.post(`/api/job/add-job`,{
            "title": title,
            "description": description,
            "price": price,
            "jobProviderId":jobProviderId,
            "categoryId": categoryId,
        })
    }
};
