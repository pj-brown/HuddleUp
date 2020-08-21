import axios from "axios";
export default {
  createRoster: function() {
    return axios.post("/api/roster").then(response => response.data);
  },
  createManager: function() {
    return axios.post("/api/manager");
  },
  getAllPlayers: function() {
    return axios.get("/api/players/1");
  }
};
