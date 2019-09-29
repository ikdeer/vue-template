import axios from "axios";
import { BASE_API_URL } from "./baseUrl";

const AXIOS_INSTANCE = axios.create({
  baseURL: BASE_API_URL
});

AXIOS_INSTANCE.defaults.withCredentials = true;

// 请求拦截
AXIOS_INSTANCE.interceptors.request.use(config => {
  return config;
});

// 响应拦截
AXIOS_INSTANCE.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export default async (url = "", data = null, config = {}) => {
  const defaultConfig = {
    url: url,
    method: "get",
    timeout: 1200
  };
  if (config.method) {
    config.method = config.method.toLowerCase();
  }

  const axiosConfig = Object.assign(defaultConfig, config);
  if (axiosConfig.method === "get") {
    axiosConfig.params = data;
  } else {
    axiosConfig.data = data;
  }

  try {
    const response = await AXIOS_INSTANCE(axiosConfig);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
