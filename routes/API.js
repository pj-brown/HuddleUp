// Requiring our models and passport as we've configured it
var db = require("../models");

module.exports = function (app) {
	// Features
	// manager is able to create, update, read and delete their eintire roster.
	//not interested in player data
	// Read
	app.get("/api/roster", (req, res) => {
		if (req.user) {
			db.Roster.findAll({
				where: {
					managerID: req.user.id,
				},
			}).then((dbRoster) => {
				//we have teh roster info
				//db.Players.findAll
				res.json(dbRoster);
			});
		}
	});

	app.get("/api/players", (req, res) => {
		if (req.user) {
			db.Player.findAll({
				where: {
					rosterID: req.user.id,
				},
			});
		}
	});

	app.get("/api/players/:id", (req, res) => {
		db.Player.findOne({
			where: {
				id: req.params.id,
			},
		});
	});

	app.get("/api/events/:id", (req, res) => {
		db.Player.findOne({
			where: {
				id: req.params.id,
			},
		});
	});

	app.get("/api/events", (req, res) => {
		if (req.user) {
			db.Event.findAll({
				where: {
					rosterID: req.user.id,
				},
			});
		}
	});

	// Create
	app.post("/api/roster", (req, res) => {
		db.Roster.create({
			teamName: req.body.teamName,
			city: req.body.city,
			state: req.body.state,
			bio: req.body.bio,
		})
			.then((dbRoster) => {
				res.json(dbRoster);
			})
			.catch((err) => res.json(err));
	});

	app.post("/players", (req, res) => {
		db.Players.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			phoneNumber: req.body.phoneNumber,
			playerNumber: req.body.playerNumber,
			points: req.body.points,
			rebounds: req.body.rebounds,
			assist: req.body.assist,
			gamesPlayed: req.body.gamesPlayed,
		})
			.then((dbPlayers) => {
				res.json(dbPlayers);
			})
			.catch((err) => res.json(err));
	});

	app.post("/api/events", (req, res) => {
		db.Events.create({
			eventDate: req.body.eventDate,
			eventTime: req.body.eventTime,
			eventType: req.body.eventType,
		})
			.then((dbEvents) => {
				res.json(dbEvents);
			})
			.catch((err) => res.json(err));
	});

	// PUT ROUTES
	app.put("/api/players/:id", (req, res) => {
		db.Players.update(req.body, {
			where: {
				id: req.params.id,
			},
		})
			.then((dbPlayers) => {
				res.json(dbPlayers);
			})
			.catch((err) => res.json(err));
	});

	app.put("/api/events/:id", (req, res) => {
		db.Event.update(req.body, {
			where: {
				id: req.params.id,
			},
		})
			.then((dbEvent) => {
				res.json(dbEvent);
			})
			.catch((err) => res.json(err));
	});

		app.put("/api/events/:id", (req, res) => {
		db.Event.update(req.body, {
			where: {
				id: req.params.id,
			},
		})
			.then((dbEvent) => {
				res.json(dbEvent);
			})
			.catch((err) => res.json(err));
	});
	// Delete
	app.delete("/api/players/:id", (req, res) => {
		db.Players.destroy({
			where: {
				id: req.params.id,
			},
		})
			.then((dbPlayers) => {
				res.json(dbPlayers);
			})
			.catch((err) => res.json(err));
	});

	app.delete("/api/events/:id", (req, res) => {
		db.Event.destroy({
			where: {
				id: req.params.id,
			},
		})
			.then((dbEvent) => {
				res.json(dbEvent);
			})
			.catch((err) => res.json(err));
	});
};
