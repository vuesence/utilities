let getToken: any = null;

let baseUrl = "";

const http = {

  setBaseUrl(url: string) {
    baseUrl = url;
  },
  setTokenFetcher(_tokenFetcher: Function) {
    getToken = _tokenFetcher;
  },

  async request(data: any, uri: string) {
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
    const headers: any = {};
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
