import axios from "axios";
const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
});

export default instance;

