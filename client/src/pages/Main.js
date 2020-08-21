import React, { useState, useEffect } from 'react'
import "../../src/App.css";
import Navbar from "../components/Navbar/Navbar";
import firebase from "../firebase/init";
import API from "../utils/API";

const Main = () => {
	const [manager, setManager] = useState([]);
	const [roster, setRoster] = useState([]);


	useEffect(() => {
		verifyUser();
	}, [])

	function verifyUser() {
		var user = firebase.auth().currentUser;

		if (user != null) {
			user.providerData.forEach(function (profile) {
				console.log("Sign-in provider: " + profile.providerId);
				console.log("  Provider-specific UID: " + profile.uid);
				console.log("  Name: " + profile.displayName);
				console.log("  Email: " + profile.email);
				console.log("  Photo URL: " + profile.photoURL);
			});
		}
	}

	// load manager after handleCreateManager
	function loadManager() {
		API.getManager()
			.then(res => setManager(res.data))
			.catch(err => console.log(err));
	};

	// create manager on button click
	function handleCreateManager(event) {
		event.preventDefault();
		API.createManager({
			displayName: manager.displayName
		})
			.then(res => loadManager())
			.catch(err => console.log(err));
	}

	// load roster after handleCreateRoster
	function loadRoster() {
		API.getRoster()
			.then(res => setRoster(res.data))
			.catch(err => console.log(err));
	};
	// create roster on button click
	function handleCreateRoster(event) {
		event.preventDefault();
		API.createRoster({
			teamName: roster.teamName,
			city: roster.city,
			state: roster.state,
			bio: roster.bio
		})
			.then(res => loadRoster())
			.catch(err => console.log(err));
	}

	return (
		<div>
			<Navbar />
			<h1>manager display name here</h1>
			<h3>roster team name here</h3>
			<h3>roster team city and state here</h3>
			<h3>roster team bio here</h3>

			<div className="container">
				<form>
					<label for="manager-name">Manager</label>
					<input
						type="text"
						id="manager-name"
						name={manager.displayName}
						placeholder="Enter user name"
					/>

					<button onChange={handleCreateManager}>Create manager</button>

					<br /><hr />

					<label for="team-name">Team Name</label>
					<input
						type="text"
						id="team-name"
						name={roster.teamName}
						placeholder="Enter team name"
					/>

					<label for="team-city">Team city</label>
					<input
						type="text" id="team-city"
						name={roster.city}
						placeholder="Enter team city"
					/>

					<label for="team-state">Team state</label>
					<input
						type="text"
						id="team-state"
						name={roster.state}
						placeholder="Enter team state"
					/>

					<label for="team-bio">Team bio</label>
					<input
						type="text"
						id="team-bio"
						name={roster.bio}
						placeholder="Enter team bio"
					/>

					<button onChange={handleCreateRoster}>Create roster</button>
				</form>
			</div>

		</div>
	)
}

export default Main
