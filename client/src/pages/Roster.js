import React, { useState, useEffect } from 'react'
import '../../src/App.css';
import Navbar from '../components/Navbar/Navbar';
import PlayerCard from '../components/PlayerCard/PlayerCard';
import AddPlayer from '../components/PlayerInput/AddPlayer/AddPlayer';
import API from '../utils/API';
import { Modal, Button } from '@material-ui/core';

const Roster = () => {
	const [players, setPlayers] = useState([]);
	const [formObject, setFormObject] = useState({})
	const [open, setOpen] = React.useState(false);

	useEffect(() => {
		loadPlayers()
	}, [])

	function loadPlayers() {
		API.getPlayers()
			.then(res => setPlayers(res.data))
			.catch(err => console.log(err));
	};

	// Deletes a player from the database with a given id, then reloads players from the db
	function deletePlayer(id) {
		API.deletePlayer(id)
			.then(res => loadPlayers())
			.catch(err => console.log(err));
	}

	// Handles updating component state when the user types into the input field
	function handleInputChange(event) {
		const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value })
	};

	// When the form is submitted, use the API.savePlayer method to save the player data
	// Then reload players from the database
	function handleAddPlayer(event, roster) {
		event.preventDefault();
		console.log(formObject.firstName)
		API.savePlayer({
			firstName: formObject.firstName,
			lastName: formObject.lastName,
			phoneNumber: formObject.phoneNumber,
			playerNumber: formObject.playerNumber,
			points: 0,
			rebounds: 0,
			assist: 0,
			gamesPlayed: 0,
			RosterId: 1
		})
			.then(res => loadPlayers())
			.catch(err => console.log(err));
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const body = (
		<div className="container">
			<AddPlayer
				handleInputChange={handleInputChange}
				handleAddPlayer={handleAddPlayer}
				firstName={formObject.firstName}
				lastName={formObject.lastName}
				phoneNumber={formObject.phoneNumber}
				playerNumber={formObject.playerNumber}
				handleClose={handleClose}
			/>
		</div>
	);

	return (
		<div>
			<Navbar />
			<h1 style={{ textAlign: "center" }}>Roster</h1>

			<div className="container">
				<div>
					<button type="button" onClick={handleOpen}>Create Player</button>
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
					>
						{body}
					</Modal>
				</div>
			</div>
			<div className="container">
				{players.map(player => (
					<PlayerCard
						firstName={player.firstName}
						lastName={player.lastName}
						phoneNumber={player.phoneNumber}
						playerNumber={player.playerNumber}
						deletePlayer={() => deletePlayer(player.id)}
					/>
				))}
				{/* <PlayerCard /> */}
			</div>
		</div>
	)
}

export default Roster
