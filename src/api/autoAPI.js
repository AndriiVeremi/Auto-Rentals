import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log('BASE_URL::: ', BASE_URL);



axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getAuto = async (page = 1) => {
    const data = await axios.get("/api/auto");
    return data;
}

