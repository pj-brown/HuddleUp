import React, { Component } from "react";
import "../../src/App.css";
import Navbar from "../components/Navbar/Navbar";
import firebase from "../firebase/init";
import API from "../utils/API";

class Main extends Component {
	state = {};

	componentDidMount() {
		this.verifyUser();
	}

	// handleCreateRoster = (e) => {
	// 	let targetElement = e.target;
	// 	this.setState 
	// };

	verifyUser() {
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

	render() {
		return (
			<div>
				<Navbar />
				<h1>Main Page</h1>
				<button>Add a roster</button>
      </div>
		);
	}
}

export default Main;
