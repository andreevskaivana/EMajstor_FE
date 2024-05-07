import instance from "../config/axios.js";

export const CompanyService = {
    fetchJobsByCompany: (jobId) => {
        return instance.get(`/api/jobProvider?jobId=${jobId}`);
    },
};
