import axios from "axios";

export const memoryApi = {

  Memory: () => axios.get("/memory"),

}