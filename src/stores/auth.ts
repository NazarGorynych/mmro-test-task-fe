import { InfoUser } from "@utils/types";
import { makeObservable, action, observable, runInAction } from "mobx";

import { Resource } from "./resource";

export class Authorization extends Resource {
  isLoading: boolean = false;
  user: InfoUser | null = null;
  constructor() {
    super();
    makeObservable(this, {
      isLoading: observable,
      user: observable,
      signIn: action,
      signUp: action,
      logout: action,
      getUserInfo: action,
      init: action
    });
    this.init();
  }

  async init() {
    await this.getUserInfo();
  }

  signIn = async ({ email, password }: { email: string; password: string }) => {
    try {
      this.isLoading = true;
      await this.fetch?.post("/login", {
        data: {
          user: {
            email,
            password
          }
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
          this.getUserInfo();
        });
      }
    } catch (error) {
      console.log(error, "error");
    } finally {
      this.isLoading = false;
    }
  };

  getUserInfo = async () => {
    try {
      const { data } = await this.fetch.get("/users/info");
      this.user = data;
    } catch (error) {
      console.log(error);
    }
  };

  logout = async () => {
    await this.fetch.delete("/logout");
    this.token = null;
    this.user = null;
    localStorage.removeItem("token");
  };
}
