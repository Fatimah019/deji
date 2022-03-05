/**
 * @description Import needed libraries to display data on user page
 * @author By Deji Adebayo
 */
//Begin Import statement
import axios from "axios"; //Import Axios Libraries to make http request from the api provided

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
