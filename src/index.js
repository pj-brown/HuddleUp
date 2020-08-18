import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyC496L4qGmtetkzTBnNvtOYiuIP9olJ1CM",
	authDomain: "huddleup-ce318.firebaseapp.com",
	databaseURL: "https://huddleup-ce318.firebaseio.com",
	projectId: "huddleup-ce318",
	storageBucket: "huddleup-ce318.appspot.com",
	messagingSenderId: "1013553364940",
	appId: "1:1013553364940:web:81bd26c556c8857d006769",
	measurementId: "G-83G6ZNTKEZ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
