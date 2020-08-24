import React, { useState, useEffect, useContext } from 'react'
import "../../src/App.css";
import Navbar from "../components/Navbar/Navbar";
// import firebase from "../firebase/init";
import API from "../utils/API";
import UserContext from '../context/user';


const Main = () => {
	const { user, setUser } = useContext(UserContext);
	const [manager, setManager] = useState([]);
	const [roster, setRoster] = useState([]);


	useEffect(() => {
		// verifyUser();
		// async function getData() {
		// 	setUser(user)
		// 	console.log(user)
		// 	await createNewManager(user);
		// 	// console.log(user)
		// 	await loadRoster();
		// 	console.log(roster)
		// }
		// getData();

		setUser(user)
		console.log(user)
		createNewManager(user).then(res => {
			loadRoster().then(resTwo => {
				console.log(roster)
			})
		});


	}, [])

	// function verifyUser() {
	// 	var user = firebase.auth().currentUser;
	// 	if (user != null) {
	// 		user.providerData.forEach(function (profile) {
	// 			console.log("Sign-in provider: " + profile.providerId);
	// 			console.log("  Provider-specific UID: " + profile.uid);
	// 			console.log("  Name: " + profile.displayName);
	// 			console.log("  Email: " + profile.email);
	// 			console.log("  Photo URL: " + profile.photoURL);
	// 		});
	// 	}
	// }

	// load manager after handleCreateManager
	function loadManager(user) {
		API.getManager(user)
			.then(res => setManager(res.data))
			.catch(err => console.log(err));
	};

	function createNewManager(user) {

		return API.createManager({
			displayName: user.displayName,
			uid: user.uid
		})
			.then(res => {
				loadManager()
				console.log(res);
				return "Res test"
			})
			.catch(err => console.log(err));
	}

	// load roster after handleCreateRoster
	function loadRoster() {

		return API.getRoster()
			.then(res => {
				console.log(res.data)
				setRoster(res.data)
				console.log(roster);
			})
			.catch(err => console.log(err));
	};

	// create roster on button click
	function handleCreateRoster(event, user) {
		event.preventDefault();
		API.createRoster({
			teamName: roster.teamName,
			city: roster.city,
			state: roster.state,
			bio: roster.bio,
			ManagerId: 1
		})
			.then(res => loadRoster())
			.catch(err => console.log(err));
	}
	if (roster.length > 0) {
		return (

			<div>
				{console.log(roster)}
				<Navbar />
				<h1>{user.displayName}</h1>
				<h3>{roster[0].teamName}</h3>
				<h3>{roster[0].city}, {roster[0].state}</h3>
				<h3>{roster[0].bio}</h3>

				<div className="container">
					<form>
						<h3>set up your team</h3>
						<label htmlFor="team-name">Team Name</label>
						<input
							type="text"
							id="team-name"
							name="teamName"
							placeholder="Enter team name"
							value={roster.teamName}
						/>

						<label htmlFor="team-city">Team city</label>
						<input
							type="text" id="team-city"
							name="teamCity"
							placeholder="Enter team city"
							value={roster.city}
						/>

						<label htmlFor="team-state">Team state</label>
						<input
							type="text"
							id="team-state"
							name="teamState"
							placeholder="Enter team state"
							value={roster.state}
						/>

						<label htmlFor="team-bio">Team bio</label>
						<input
							type="text"
							id="team-bio"
							name="teamBio"
							placeholder="Enter team bio"
							value={roster.bio}
						/>

						<button onClick={handleCreateRoster}>Create roster</button>
					</form>
				</div>
			</div>

		)
	} else {
		return (
			<div>
				<Navbar />
				<div className="container">
					<h1>{user.displayName}</h1>
					<form>
						<h3>set up your team</h3>
						<label htmlFor="team-name">Team Name</label>
						<input
							type="text"
							id="team-name"
							name="teamName"
							placeholder="Enter team name"
							value={roster.teamName}
						/>

						<label htmlFor="team-city">Team city</label>
						<input
							type="text" id="team-city"
							name="teamCity"
							placeholder="Enter team city"
							value={roster.city}
						/>

						<label htmlFor="team-state">Team state</label>
						<input
							type="text"
							id="team-state"
							name="teamState"
							placeholder="Enter team state"
							value={roster.state}
						/>

						<label htmlFor="team-bio">Team bio</label>
						<input
							type="text"
							id="team-bio"
							name="teamBio"
							placeholder="Enter team bio"
							value={roster.bio}
						/>

						<button onClick={handleCreateRoster}>Create roster</button>
					</form>
				</div>
			</div>
		)
	}
}


export default Main;
