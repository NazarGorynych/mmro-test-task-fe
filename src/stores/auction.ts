import { makeAutoObservable } from "mobx";

export class Auction {
  conter = 0;
  constructor() {
    makeAutoObservable(this);
  }
  increment = (value: number) => {
    console.log(this.conter);
    this.conter += value;
  };
  decrement = (value: number) => {
    this.conter -= value;
  };
}
