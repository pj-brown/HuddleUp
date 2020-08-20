import React from 'react';
import '../../src/App.css';
import Navbar from '../components/Navbar/Navbar';
import firebase from '../firebase/init';



function Main() {
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
  return (
    <div>
      <Navbar />
      <h1>Main Page</h1>
    </div>
  );
}

export default Main;