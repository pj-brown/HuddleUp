import React, { Component } from "react";
import '../../src/App.css';
import Navbar from '../components/Navbar/Navbar';
import PlayerCard from '../components/PlayerCard/PlayerCard';
import AddPlayer from '../components/PlayerInput/AddPlayer/AddPlayer';
import AddStats from '../components/PlayerInput/AddStats/AddStats';

class Roster extends Component {
  state = {};

	componentDidMount() {
		console.log("Rendering Roster!");
	}

	render() {
		return (
			<div>
				<Navbar />
				<h1>Roster Page</h1>
				<div className="players-container">
					<PlayerCard />
				</div>
				<AddPlayer />
				<AddStats />
			</div>
		);
	}
}

export default Roster;