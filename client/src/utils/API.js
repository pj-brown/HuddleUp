import axios from "axios";

export default {
  createRoster: function (data) {
    return axios.post("/api/roster", data);
  },
  loadRoster: function () {
    return axios.get("/api/roster");
  },
  // Adds a new user to the database
  createManager: function (data) {
    return axios.post("/api/manager", data);
  },
  // Get user information
  getManager: function () {
    return axios.get("/api/manager");
  },
  getRoster: function() {
    return axios.get("/api/roster/1");
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
    