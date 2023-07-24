import axios from "axios";
import type { AxiosRequestConfig } from "axios";

// const auth: any = null;
let getToken: any = null;

const http = {

  setTokenFetcher(_tokenFetcher) {
    getToken = _tokenFetcher;
  },
  setBaseUrl(url) {
    axios.defaults.baseURL = url;
  },

  async request(data, uri: String) {
    const config: AxiosRequestConfig = {
      method: "POST",
      url: `rpc/${uri}`,
      data,
      withCredentials: true,
      // params: { origin: "backOffice" },
      headers: getToken() ? { Authorization: `Bearer ${getToken()}` } : {},
    };

    try {
      return await axios.request(config);
      // return axios.request({ method, url, params, headers });
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
