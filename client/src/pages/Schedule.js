import React, { Component } from "react";
import '../../src/App.css';
import Navbar from '../components/Navbar/Navbar';

class Schedule extends Component {
	state = {};

	componentDidMount() {
		console.log("Rendering Schedule!");
	}
  
  render() {
		return (
			<div>
				<Navbar />
				<h1>Schedule Page</h1>
			</div>
		);
	}
}



export default Schedule;