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
      return await fetch(url)
        .then(response => response.json());
    } catch (error) {
      console.log(error);
    }
  },

  async post(uri, payload, options) {
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
