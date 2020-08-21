import axios from "axios";

export default {
  createRoster: function () {
    return axios.post("/api/roster");
  },
  loadRoster: function () {
    return axios.get("/api/roster");
  },
  createManager: function () {
    return axios.post("/api/manager/");
  },
  loadMabager: function () {
    return axios.get("/api/manager");
  },
  // getOnePlayer: function () {
  //   return axios.get("/api/player:id");
  // },
  // getAllPlayers: function () {
  //   return axios.get("/api/players/:id");
  // }
  // Gets all players
  getPlayers: function () {
    return axios.get("/api/players");
  },
  // Gets the book with the given id
  getPlayer: function (id) {
    return axios.get("/api/players/" + id);
  },
  // Deletes the players with the given id
  deletePlayer: function (id) {
    return axios.delete("/api/players/" + id);
  },
  // Saves a players to the database
  savePlayer: function (playersData) {
    return axios.post("/api/players", playersData);
  }
};
