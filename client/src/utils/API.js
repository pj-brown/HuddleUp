import axios from "axios";
export default {
  createRoster: function() {
    return axios.post("/api/roster").then(response => response.data);
  },
  createManager: function() {
    return axios.post("/api/manager");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};
