import axios, { AxiosInstance } from "axios";
import { makeObservable, action, observable } from "mobx";

export class Resource {
  token: string | null = null;
  fetch: AxiosInstance = axios;
  constructor() {
    makeObservable(this, {
      token: observable,
      fetch: observable,
      initToken: action,
      initFetch: action
    });
    this.initToken();
    this.initFetch();
  }

  initToken() {
    this.token = "test";
  }

  initFetch() {
    const fetch = axios.create({
      baseURL: process.env.REACT_APP_API,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
      }
    });
    this.fetch = fetch;
  }
}
