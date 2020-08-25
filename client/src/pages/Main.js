import React, { useState, useEffect, useContext } from 'react'
import "../../src/App.css";
import Navbar from "../components/Navbar/Navbar";
import AddRoster from "../components/AddRoster/AddRoster";
// import firebase from "../firebase/init";
import API from "../utils/API";
import UserContext from '../context/user';
// import { borders } from '@material-ui/system';

// const defaultProps = {
// 	bgcolor: 'background.paper',
// 	m: 1,
// 	border: 1,
// 	style: { width: '5rem', height: '5rem' },
// };

// export default function BorderColor() {
// 	return (
// 		<Box display="flex" justifyContent="center">
// 			<Box borderColor="primary.main" {...defaultProps} />
// 			<Box borderColor="secondary.main" {...defaultProps} />
// 			<Box borderColor="error.main" {...defaultProps} />
// 			<Box borderColor="grey.500" {...defaultProps} />
// 			<Box borderColor="text.primary" {...defaultProps} />
// 		</Box>
// 	);
// }

const Main = () => {
	const { user, setUser } = useContext(UserContext);
	const [manager, setManager] = useState([]);
	const [roster, setRoster] = useState([]);
	const [formObject, setFormObject] = useState({})


	useEffect(() => {
	
		setUser(user)
		console.log(user)
		createNewManager(user).then(res => {
			return loadRoster()
		}).then(resTwo => {
			console.log(roster);
		}).catch(err => console.log(err))
	}, []);

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
			teamName: formObject.teamName,
			city: formObject.city,
			state: formObject.state,
			bio: formObject.bio,
			ManagerId: 1
		})
			.then(res => loadRoster())
			.catch(err => console.log(err));
	}

	function handleInputChange(event) {
		const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value })
	};

	if (roster.length > 0) {
		return (

			<div>
				{console.log(roster)}
				<Navbar />
				<div className="roster-info" style={{
					margin: "auto"
				}} >
					< h1 > {user.displayName}</h1>
					<h3>{roster[0].teamName}</h3>
					<h3>{roster[0].city}, {roster[0].state}</h3>
					<h3>{roster[0].bio}</h3>
				</div >

			</div >

		)
	} else {
		return (
			<div>
				<Navbar />
				<div className="main-roster-container">
					<h1>Welcome {user.displayName}!</h1>
					<AddRoster
						handleInputChange={handleInputChange}
						handleCreateRoster={handleCreateRoster}
						teamName={formObject.teamName}
						city={formObject.city}
						state={formObject.state}
						bio={formObject.bio}
					/>
				</div>
			</div >
		)
	}
}


export default Main;
