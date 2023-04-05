import axios from "axios";
import setAccessToken from "./setAccessToken";

const customAxios = axios.create({});

customAxios.interceptors.request.use(setAccessToken);

export default customAxios;
