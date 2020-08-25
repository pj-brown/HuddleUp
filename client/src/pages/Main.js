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
	const [roster, setRoster] = useState([]);
	const [formObject, setFormObject] = useState({
		teamName: "",
		city: "",
		state: "",
		bio: "",
	})

	useEffect(() => {
		setUser(user)
		createNewManager(user).then(res => {
			loadRoster().then(resTwo => {})
		});
	}, [])

	function createNewManager(user) {
		return API.createManager({
			displayName: user.displayName,
			uid: user.uid
		})
			.then(res => {})
			.catch(err => console.log(err));
	}

	// load roster after handleCreateRoster
	function loadRoster() {
		return API.getRoster(user.uid)
			.then(res => setRoster(res.data))
			.catch(err => console.log(err));
	};

	// create roster on button click
	function handleCreateRoster(event) {
		event.preventDefault();
		API.createRoster({
			teamName: formObject.teamName,
			city: formObject.city,
			state: formObject.state,
			bio: formObject.bio,
			ManagerId: user.uid
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
				<Navbar />
				<h1 style={{ textAlign: "center" }}>Welcome {user.displayName}!</h1>
				<div className="container">
					<div className="roster-info">
						<label>Team Name:</label>
						<h3 style={{ backgroundColor: "#243e85", padding: "5px", borderRadius: "5px", textAlign: "center" }}>{roster[0].teamName}</h3>
						<label>Location:</label>
						<h3 style={{ backgroundColor: "#243e85", padding: "5px", borderRadius: "5px", textAlign: "center" }}>{roster[0].city}, {roster[0].state}</h3>
						<label>Bio:</label>
						<h3 style={{ backgroundColor: "#243e85", padding: "5px", borderRadius: "5px", textAlign: "left" }}>{roster[0].bio}</h3>
					</div >
				</div>
			</div >

		)
	} else {
		return (
			<div>
				<Navbar />
				<h1 style={{ textAlign: "center" }}>Welcome {user.displayName}!</h1>
				<div className="container">
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
