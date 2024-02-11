import { makeObservable, action, observable, runInAction } from "mobx";

import { Resource } from "./resource";

export class Authorization extends Resource {
  isLoading: boolean = false;
  error: string | null = null;
  constructor() {
    super();
    makeObservable(this, {
      isLoading: observable,
      error: observable,
      signIn: action,
      signUp: action,
      logout: action,
      init: action
    });
  }

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
}
