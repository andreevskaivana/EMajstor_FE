import axios from "axios";
const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
});
let isAuthorized = false;
instance.interceptors.request.use(
    (config) => {
        if (isAuthorized) {
            isAuthorized=true;
            const token = localStorage.getItem("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const setAuthorization = (authorized) => {
    isAuthorized=authorized;
}
export default instance;

