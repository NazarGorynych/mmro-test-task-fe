import { InfoUser } from "@utils/types";
import axios, { AxiosInstance } from "axios";
import { makeObservable, action, observable } from "mobx";

export class Resource {
  token: string | null = null;
  fetch: AxiosInstance = axios;
  isLoading: boolean = false;
  user: InfoUser | null = null;
  balance: string = "0";
  reservedBalance: string = "0";

  constructor() {
    makeObservable(this, {
      user: observable,
      balance: observable,
      reservedBalance: observable,
      getUserInfo: action
    });
    this.init();
    this.initFetch();
  }

  init = async () => {
    if (!this.user) {
      this.isLoading = true;
      const token = localStorage.getItem("token");
      this.token = token;
      if (token) {
        await this.getUserInfo(token);
      }
      this.isLoading = false;
    }
  };

  initFetch() {
    const fetch = axios.create({
      baseURL: process.env.REACT_APP_API,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
      }
    });
    this.fetch = fetch;
    return fetch;
  }

  getUserInfo = async (token?: string) => {
    try {
      const fetch = this.initFetch();
      const confim = token
        ? {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }
        : {};

      const { data } = await fetch.get("/users/info", confim);

      this.user = data;
      this.balance = data.wallet_amount;
      this.reservedBalance = data.wallet_reserved_amount;
    } catch (error) {
      console.log(error);
    }
  };
}
