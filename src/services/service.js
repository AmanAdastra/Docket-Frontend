import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        "Content-Type": "application/json"
    },
});

axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    let token = localStorage.getItem("token");
    config.headers["Authorization"] = "Bearer " + token;
    return config;
});

export default axiosInstance;
