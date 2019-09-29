const isDev = process.env.NODE_ENV === "develpoment";
const BASE_API_URL = isDev ? "loc" : "http";

export default BASE_API_URL;
