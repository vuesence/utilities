// import axios from "axios";
// import type { AxiosRequestConfig } from "axios";

import HttpRequest from "./helper-xhr";

let getToken: any = null;
let baseUrl = "";

const http = {

  setBaseUrl(url: string) {
    baseUrl = url;
  },
  setTokenFetcher(_tokenFetcher) {
    getToken = _tokenFetcher;
  },

  async request(data: any, uri: string) {
    return http.requestXhr(data, uri);
  },

  async requestXhr(data: any, uri: string) {
    const xhr = new HttpRequest("POST", `${baseUrl}rpc/${uri}`, "application/json");
    xhr.xhr.withCredentials = true;
    // if (getToken()) {
    //   xhr.setRequestHeader("Authorization", `Bearer ${getToken()}`);
    // }
    const response = await xhr.send(data);
    return response.json;
  },

  async requestFetch(data: any, uri: string) {
    const headers: any = {
      "Content-Type": "application/json",
      ...(getToken() && { Authorization: `Bearer ${getToken()}` }),
    };

    const response = await fetch(`${baseUrl}rpc/${uri}`, {
      method: "POST",
      headers,
      credentials: "include",
      body: JSON.stringify(data),
    });

    const resp = await response.json();
    // resp.data = resp;

    return resp;
  },

  // async requestAxios(data: any, uri: String) {
  //   const config: AxiosRequestConfig = {
  //     method: "POST",
  //     url: `rpc/${uri}`,
  //     data,
  //     withCredentials: true,
  //     headers: getToken() ? { Authorization: `Bearer ${getToken()}` } : {},
  //   };

  //   try {
  //     return await axios.request(config);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },

  async get(url) {
    try {
      return await fetch(url)
        .then(response => response.json());
    } catch (error) {
      console.log(error);
    }
  },

  async post(uri, payload) {
    const headers: any = {
      ...(getToken() && { Authorization: `Bearer ${getToken()}` }),
    };
    const resp = await fetch(`${baseUrl}${uri}`, {
      method: "POST",
      headers,
      body: payload,
    }).then(response => response.json());
    return resp;
  },

};

export default http;
