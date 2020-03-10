import axios from "axios";

export const memoryApi = {

    getMemory: () => axios.get("/memory"),
}