// import axios from "axios";

// const auth: any = null;
let getToken: any = null;

let baseUrl = "";

const http = {

  setBaseUrl(url: string) {
    // axios.defaults.baseURL = url;
    baseUrl = url;
  },
  setTokenFetcher(_tokenFetcher: Function) {
    getToken = _tokenFetcher;
  },

  async request(data, uri: String) {
    // const config: AxiosRequestConfig = {
    //   method: "POST",
    //   url: `rpc/${uri}`,
    //   data,
    //   withCredentials: true,
    //   headers: getToken() ? { Authorization: `Bearer ${getToken()}` } : {},
    // };

    // try {
    //   return await axios.request(config);
    // } catch (error) {
    //   console.log(error);
    // }
    const headers: any = {
      "Content-Type": "application/json",
    };
    if (getToken()) {
      headers.Authorization = `Bearer ${getToken()}`;
    }
    const resp = await fetch(`${baseUrl}rpc/${uri}`, {
      method: "POST",
      headers,
      credentials: "include",
      body: JSON.stringify(data),
    }).then(response => response.json());
    // console.log(resp);
    resp.data = resp;

    return resp;
  },

  async get(url) {
    try {
      const response = await fetch(url)
        .then(response => response.json());
      response.data = response;
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async post(uri, payload, options) {
    // return axios.post(url, payload, options);
    const headers: any = {};
    // const headers: any = options.headers;
    if (getToken()) {
      headers.Authorization = `Bearer ${getToken()}`;
    }
    const resp = await fetch(`${baseUrl}${uri}`, {
      method: "POST",
      headers,
      body: payload,
    }).then(response => response.json());
    return resp;
  },

};

export default http;
