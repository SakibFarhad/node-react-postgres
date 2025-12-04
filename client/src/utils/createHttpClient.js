import axios from "axios";

export default function createChannel() {
    const controller = new AbortController();
    const token = localStorage.getItem("r-token");
    const request = axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        signal: controller.signal,
    });
    console.log("API URL =", process.env.REACT_APP_API_URL);
    return { request, controller }
};