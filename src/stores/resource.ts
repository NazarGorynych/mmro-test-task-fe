import { InfoUser, AuctionType } from "@utils/types";
import axios, { AxiosInstance } from "axios";
import { makeObservable, action, observable, runInAction } from "mobx";

export class Resource {
  token: string | null = null;
  fetch: AxiosInstance = axios;
  isLoading: boolean = false;
  error: string | null = null;
  user: InfoUser | null = null;
  auctions: AuctionType[] | null = null;
  auction: AuctionType | null = null;
  userAuctions: AuctionType[] | null = null;
  balance: string = "0";
  reservedBalance: string = "0";

  constructor() {
    makeObservable(this, {
      user: observable,
      balance: observable,
      reservedBalance: observable,
      isLoading: observable,
      error: observable,
      userAuctions: observable,
      auctions: observable,
      auction: observable,
      getAuctions: action,
      getAuction: action,
      getUserInfo: action,
      signIn: action,
      signUp: action,
      logout: action,
      init: action,
      createUserAuctions: action,
      updateUserAuctions: action,
      replenishBalance: action,
      getUserAuctions: action,
      getUserAuction: action,
      deleteUserAuction: action
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

  createUserAuctions = async () => {
    try {
      const data = await this.fetch.get("/users/auctions");
      this.userAuctions = data?.data;
    } catch (error) {
      console.log(error, "error");
    }
  };

  getAuctions = async () => {
    try {
      const data = await this.fetch?.get("/auctions");
      this.auctions = data?.data?.auctions;
    } catch (error) {
      console.log(error, "error");
    }
  };
  getAuction = async (id: number) => {
    try {
      const data = await this.fetch?.get(`/auctions/${id}`);
      this.auction = data?.data;
    } catch (error) {
      console.log(error, "error");
    }
  };
  createBid = async (id: number) => {
    try {
      const data = await this.fetch?.get(`/auctions/${id}/bids`);
      this.auction = data?.data;
    } catch (error) {
      console.log(error, "error");
    }
  };

  signIn = async ({ email, password }: { email: string; password: string }) => {
    try {
      this.isLoading = true;
      return await this.fetch.post("/login", {
        user: {
          email,
          password
        }
      });
    } catch (error) {
      console.log(error, "error");
    } finally {
      this.isLoading = false;
    }
  };

  signUp = async ({
    email,
    password,
    name,
    lastname
  }: {
    email: string;
    password: string;
    name: string;
    lastname: string;
  }) => {
    try {
      this.error = null;
      this.isLoading = true;
      const response = await this.fetch.post("/signup", {
        user: {
          email,
          name: name + " " + lastname,
          password
        }
      });
      const { data } = response;
      if (data.status === 200) {
        const token = response.headers.authorization.replace("Bearer ", "");
        localStorage.setItem("token", token);
        runInAction(() => {
          this.token = token;
          this.getUserInfo(token);
        });
      }
      return response;
    } catch (error) {
      this.error = "Користувач з таким email вже зареєстрований";
      console.log(error, "error");
    } finally {
      this.isLoading = false;
    }
  };

  logout = async () => {
    await this.fetch.delete("/logout");
    this.token = null;
    this.user = null;
    localStorage.removeItem("token");
  };

  replenishBalance = async (amount: string) => {
    try {
      console.log(this.fetch, " this.fetch");
      const { data } = await this.fetch.put("users/replenish", {
        amount
      });
      runInAction(() => {
        this.balance = data.amount;
        this.reservedBalance = data.reserved_amount;
      });
      return data;
    } catch (error) {
      console.log(error, "error");
    }
  };

  updateUserAuctions = async () => {};

  getUserAuctions = async () => {};

  getUserAuction = async () => {};

  deleteUserAuction = async () => {};
}
