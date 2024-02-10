import { defineStore } from "pinia";

const storeAdmin = new defineStore("admin",{
  state: {
    id: "",
    name: "",
    password: ""
  }
});

export default storeAdmin;