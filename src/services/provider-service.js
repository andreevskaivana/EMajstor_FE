import instance from "../config/axios.js";

export const ProviderService = {
    fetchProvidersByJob: (providerId) => {
        return instance.get(`api/jobProvider/${providerId}`);
    }
};

export default ProviderService;

