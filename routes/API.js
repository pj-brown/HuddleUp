// Requiring our models and passport as we've configured it
var db = require("../models");

module.exports = function (app) {
	// Features
	// manager is able to create, update, read and delete their eintire roster.
	//not interested in player data

	// Read
	// Get all players in DB
	app.get("/api/players", function (req, res) {
		db.Players.findAll({})
			.then(function (dbPlayers) {
				console.log(dbPlayers);
				res.json(dbPlayers);
			})
			.catch(err => res.json(err));
	});

	app.get("/api/roster/:id", (req, res) => {
		db.Roster.findAll({
			where: {
				ManagerID: req.params.id,
			},
		}).then((dbRoster) => {
			//we have teh roster info
			//db.Players.findAll
			console.log(dbRoster)
			res.json(dbRoster);
		}).catch((err) => res.json(err));

	});

app.get("/api/players/:id", (req, res) => {
	if (req.user) {
		db.Players.findAll({
			where: {
				RosterId: req.params.id,
			},
		}).then(dbPlayers => res.json(dbPlayers))
	}
	else {
		res.send("You must be logged in to view this page.")
	}
});

app.get("/api/player/:id", (req, res) => {
	db.Players.findOne({
		where: {
			id: req.params.id,
		},
	}).then(dbPlayer => res.json(dbPlayer))
});

app.get("/api/events/:id", (req, res) => {
	db.Player.findOne({
		where: {
			EventId: req.params.id,
		},
	});
});

app.get("/api/events", (req, res) => {
	if (req.user) {
		db.Event.findAll({
			where: {
				RosterId: req.user.id,
			},
		});
	}
});

	app.get("/api/events", (req, res) => {
		if (req.user) {
			db.Event.findAll({
				where: {
					RosterId: req.user.id,
				},
			});
		}
	});
	app.get("/api/manager/:id", (req, res) => {
		console.log(req.user);
		if (req.user) {
			db.Manager.findAll({
				where: {
					uid: req.params.uid,
				},
			});
		}
	});

	// Create
	app.post("/api/manager", (req, res) => {
		db.Manager.create({
			displayName: req.body.displayName,
			uid: req.body.uid
		})
			.then((dbManager) => {
				res.json(dbManager);
			})
			.catch((err) => res.json(err));
	});

	app.post("/api/roster", (req, res) => {
		db.Roster.create({
			teamName: req.body.teamName,
			city: req.body.city,
			state: req.body.state,
			bio: req.body.bio,
			ManagerId: req.body.ManagerId
		}).then( dbRoster => res.json(dbRoster))
		.catch((err) => res.json(err));
});

	app.post("/api/players", (req, res) => {
		db.Players.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			phoneNumber: req.body.phoneNumber,
			playerNumber: req.body.playerNumber,
			points: req.body.points,
			rebounds: req.body.rebounds,
			assist: req.body.assist,
			gamesPlayed: req.body.gamesPlayed,
			RosterId: req.body.RosterId
		}).then( dbPlayers => res.json(dbPlayers))
		.catch((err) => res.json(err));
});

app.post("/api/events", (req, res) => {
	db.Events.create({
		eventDate: req.body.eventDate,
		eventStartTime: req.body.eventStartTime,
		eventEndTime: req.body.eventEndTime,
		eventType: req.body.eventType,
		RosterId: req.body.RosterId
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

app.put("/api/roster/:id", (req, res) => {
	db.Roster.update(req.body, {
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
