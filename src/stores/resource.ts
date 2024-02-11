import axios, { AxiosInstance } from "axios";

export class Resource {
  token: string | null = null;
  fetch: AxiosInstance = axios;
  constructor() {
    this.initToken();
    this.initFetch();
  }

  initToken() {
    const token = localStorage.getItem("token");
    this.token = token;
  }

  initFetch() {
    const fetch = axios.create({
      baseURL: process.env.REACT_APP_API,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // "X-Requested-With": "XmlHttpRequest",
        Authorization: `Bearer ${this.token}`
      }
    });
    this.fetch = fetch;
  }
}
