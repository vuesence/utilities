import axios from "axios";
import type { AxiosRequestConfig } from "axios";

// const auth: any = null;
let getToken: any = null;

const http = {

  setBaseUrl(url: string) {
    axios.defaults.baseURL = url;
  },
  setTokenFetcher(_tokenFetcher: Function) {
    getToken = _tokenFetcher;
  },

  async request(data, uri: String) {
    const config: AxiosRequestConfig = {
      method: "POST",
      url: `rpc/${uri}`,
      data,
      withCredentials: true,
      headers: getToken() ? { Authorization: `Bearer ${getToken()}` } : {},
    };

    try {
      return await axios.request(config);
    } catch (error) {
      console.log(error);
    }
  },

  async get(url, payload = {}, options = {}) {
    try {
      const response = await axios.get(url, {
        params: payload,
        // headers: {
        //   "Sec-Fetch-Mode": "no-cors"
        // }
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  post(url, payload = {}, options = {}) {
    return axios.post(url, payload, options);
  },

};

export default http;
