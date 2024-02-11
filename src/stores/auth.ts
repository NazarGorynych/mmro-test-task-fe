import { makeObservable, action, observable } from "mobx";

import { Resource } from "./resource";

export class Authorization extends Resource {
  isLoading: boolean = false;
  constructor() {
    super();
    makeObservable(this, {
      isLoading: observable,
      signIn: action,
      signUp: action,
      logout: action
    });
  }

  signIn = async ({ email, password }: { email: string; password: string }) => {
    try {
      this.isLoading = true;
      console.log(this.fetch, "this.fetch");
      await this.fetch.post("/login", {
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

  signUp = async ({ email, password }: { email: string; password: string }) => {
    try {
      this.isLoading = true;
      await this.fetch?.post("/signup", {
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

  async logout() {
    await this.fetch?.delete("/logout");
  }
}
