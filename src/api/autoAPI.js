import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getAuto = async (page = 1) => {
    const data = await axios.get("/api/auto");
    return data;
}

